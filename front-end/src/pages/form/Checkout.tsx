import { deliveryOpts } from '../../../../backend/data/deliveryOption';
import type { CartItem } from '../../../../backend/types/cart';
import { users } from '../../../../backend/data/users';
import type { UserAccount } from '../../../../backend/types/users';
import type { Order } from '../../../../backend/types/orders';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import './Checkout.css';

const TAX_RATE = 0.12;

// ── helpers (outside component, no re-creation on render) ──
function getSource(): UserAccount {
  try {
    const session = JSON.parse(sessionStorage.getItem('currentUser') ?? 'null');
    if (session) return session;
  } catch { }
  return users[0]!;
}

function formatAddress(addr: UserAccount['address']): string {
  if (!addr) return '';
  return `${addr.street}, ${addr.barangay}, ${addr.city}, ${addr.zipcode}, ${addr.country}`;
}

export const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState<CartItem[]>([]);
  const [payMethod, setPayMethod] = useState<string>('visa');
  const [toast, setToast] = useState<string | null>(null);
  const [shChecked, setShChecked] = useState(false)
  const [billChecked, setBillChecked] = useState(false)

  // Shipping
  const [shName, setShName] = useState('');
  const [shPhone, setShPhone] = useState('');
  const [shEmail, setShEmail] = useState('');
  const [shAddr, setShAddr] = useState('');

  // Billing
  const [billName, setBillName] = useState('');
  const [billAddr, setBillAddr] = useState('');

  // Card
  const [cardNumber, setCardNumber] = useState('');
  const [cardExp, setCardExp] = useState('');
  const [cardCvv, setCardCvv] = useState('');

  // E-wallet / PayPal
  const [eWalletValue, setEWalletValue] = useState('');

  // Validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const user = (() => {
      try { return JSON.parse(sessionStorage.getItem('currentUser') ?? 'null') }
      catch { return null }
    })()
    if (!user) return  // not logged in — leave fields empty, checkboxes unchecked

    const addr = formatAddress(user.address)
    setShName(user.fullName)
    setShEmail(user.email)
    setShPhone(user.phone)
    setShAddr(addr)
    setBillName(user.fullName)
    setBillAddr(addr)
    setShChecked(true)
    setBillChecked(true)
  }, [])

  // ── load cart items ──
  useEffect(() => {
    const getCheckoutItems = () => {
      try {
        const fromSession = JSON.parse(sessionStorage.getItem('checkoutItems') || '[]');
        if (Array.isArray(fromSession) && fromSession.length > 0) return fromSession;
      } catch { }
      try {
        const fromCart = JSON.parse(localStorage.getItem('cart') || '[]');
        if (Array.isArray(fromCart)) return fromCart;
      } catch { }
      return [];
    };

    const normalized = getCheckoutItems().map((item: any) => ({
      ...item,
      name: item.name || 'Unnamed Item',
      price: Number(item.price) || 0,
      qty: Number(item.qty) || 1,
      deliveryOptionId: Number(item.deliveryOptionId) || deliveryOpts[0]?.id || 1,
    }));
    setItems(normalized);
  }, []);

  const showToastMsg = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2800);
  };

  const fillShipping = (checked: boolean) => {
    if (checked) {
      const src = getSource();
      setShName(src.fullName);
      setShEmail(src.email);
      setShPhone(src.phone);
      setShAddr(formatAddress(src.address));
    } else {
      setShName(''); setShEmail(''); setShPhone(''); setShAddr('');
    }
  };

  const fillBilling = (checked: boolean) => {
    if (checked) {
      const src = getSource();
      setBillName(src.fullName);
      setBillAddr(formatAddress(src.address));
    } else {
      setBillName(''); setBillAddr('');
    }
  };

  const formatCurrency = (amount: number) =>
    'PHP ' + amount.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const getDeliveryOption = (id: number) =>
    deliveryOpts.find(opt => opt.id === id) || deliveryOpts[0] || { id: 1, name: 'Standard Delivery', deliveryDays: 5, deliveryPrice: 0 };

  const totals = (() => {
    const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
    const shipping = items.reduce((s, i) => s + getDeliveryOption(i.deliveryOptionId).deliveryPrice, 0);
    const tax = subtotal * TAX_RATE;
    return { qty: items.reduce((s, i) => s + i.qty, 0), subtotal, shipping, tax, grandTotal: subtotal + shipping + tax };
  })();

  // ── input guards ──
  const onlyLettersSpaces = (e: React.ChangeEvent<HTMLInputElement>, setter: (v: string) => void) => {
    const v = e.target.value.replace(/[^a-zA-Z\s'.,-]/g, '');
    setter(v);
  };

  const onlyPhone = (e: React.ChangeEvent<HTMLInputElement>, setter: (v: string) => void) => {
    const v = e.target.value.replace(/[^\d\s+()-]/g, '');
    setter(v);
  };

  const onlyCvv = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value.replace(/\D/g, '').slice(0, payMethod === 'amex' ? 4 : 3);
    setCardCvv(v);
  };

  const onlyEWalletPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value.replace(/[^\d\s+()-]/g, '').slice(0, 13);
    setEWalletValue(v);
  };

  // ── validation ──
  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    // Shipping
    if (!shName.trim()) errs.shName = 'Full name is required.';
    else if (/\d/.test(shName)) errs.shName = 'Name must not contain numbers.';

    if (!shPhone.trim()) errs.shPhone = 'Contact number is required.';
    else if (!/^[\d\s+()-]{7,15}$/.test(shPhone)) errs.shPhone = 'Enter a valid phone number.';

    if (!shEmail.trim()) errs.shEmail = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(shEmail)) errs.shEmail = 'Enter a valid email address.';

    if (!shAddr.trim()) errs.shAddr = 'Shipping address is required.';

    // Card methods
    if (['visa', 'mastercard', 'amex'].includes(payMethod)) {
      if (!billName.trim()) errs.billName = 'Billing name is required.';
      else if (/\d/.test(billName)) errs.billName = 'Name must not contain numbers.';

      if (!billAddr.trim()) errs.billAddr = 'Billing address is required.';

      const digits = cardNumber.replace(/\s/g, '');
      const expectedLen = payMethod === 'amex' ? 15 : 16;
      if (!digits) errs.cardNumber = 'Card number is required.';
      else if (digits.length !== expectedLen) errs.cardNumber = `Must be ${expectedLen} digits.`;

      if (!cardExp.trim()) errs.cardExp = 'Expiration date is required.';
      else {
        const parts = cardExp.replace(/\s/g, '').split('/');
        const mm = parseInt(parts[0] ?? '', 10);
        const yy = parseInt(parts[1] ?? '', 10);
        const now = new Date();
        const fullYear = 2000 + yy;
        if (!mm || !yy || mm < 1 || mm > 12) errs.cardExp = 'Enter a valid MM / YY.';
        else if (fullYear < now.getFullYear() || (fullYear === now.getFullYear() && mm < now.getMonth() + 1))
          errs.cardExp = 'Card has expired.';
      }

      const cvvLen = payMethod === 'amex' ? 4 : 3;
      if (!cardCvv) errs.cardCvv = 'CVV is required.';
      else if (cardCvv.length !== cvvLen) errs.cardCvv = `CVV must be ${cvvLen} digits.`;
    }

    // E-wallet / PayPal
    if (['gcash', 'maya'].includes(payMethod)) {
      if (!eWalletValue.trim()) errs.eWallet = 'Mobile number is required.';
      else if (!/^[\d\s+()-]{7,13}$/.test(eWalletValue)) errs.eWallet = 'Enter a valid phone number.';
    }
    if (payMethod === 'paypal') {
      if (!eWalletValue.trim()) errs.eWallet = 'PayPal email is required.';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(eWalletValue)) errs.eWallet = 'Enter a valid email address.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value.replace(/\D/g, '').slice(0, 16);
    v = v.replace(/(.{4})/g, '$1 ').trim();
    setCardNumber(v);
  };

  const handleAmexNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value.replace(/\D/g, '').slice(0, 15);
    if (v.length > 10) v = v.slice(0, 4) + ' ' + v.slice(4, 10) + ' ' + v.slice(10);
    else if (v.length > 4) v = v.slice(0, 4) + ' ' + v.slice(4);
    setCardNumber(v);
  };

  const handleExp = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value.replace(/\D/g, '');
    if (v.length >= 2) v = v.slice(0, 2) + ' / ' + v.slice(2, 4);
    setCardExp(v);
  };

  const placeOrder = () => {
    if (!items.length) { showToastMsg('No items to place.'); return; }
    if (!validate()) { showToastMsg('Please fix the errors before proceeding.'); return; }

    const currentUser: UserAccount | null = (() => {
      try { return JSON.parse(sessionStorage.getItem('currentUser') ?? 'null'); }
      catch { return null; }
    })();

    if (!currentUser) {
      showToastMsg('Please log in to place an order.');
      sessionStorage.setItem('checkoutItems', JSON.stringify(items));
      sessionStorage.setItem('redirectAfterLogin', JSON.stringify({ path: '/checkout' }));
      navigate('/auth');
      return;
    }

    const newOrder: Order = {
      id: `ORD-${String(currentUser.orders.length + 1).padStart(5, '0')}`,
      status: 'pending',
      date: new Date().toISOString().split('T')[0] ?? '',
      total: totals.grandTotal,
      items: items.map(item => {
        const opt = deliveryOpts.find(o => o.id === item.deliveryOptionId) ?? deliveryOpts[0]!;
        return {
          productId: item.id,
          name: item.name,
          quantity: item.qty,
          price: item.price,
          image: item.image ?? '',
          deliveryType: opt.name,
          deliveryDays: opt.deliveryDays,
        };
      }),
    };

    currentUser.orders.push(newOrder);
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
    localStorage.removeItem('cart');
    sessionStorage.removeItem('checkoutItems');

    showToastMsg('Order placed! Thank you. ✦');
    setTimeout(() => navigate('/orders'), 1200);
  };

  return (
    <div className="checkout-page">
      <title>Checkout</title>

      <header className="checkout-top-bar">
        <div className="top-bar-inner">
          <a className="back-link" onClick={() => navigate(-1)}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </a>
          <div className="page-title">Checkout</div>
          <div className="top-bar-spacer" aria-hidden="true"></div>
        </div>
      </header>

      <main className="checkout-wrapper">
        <aside className="summary-card">
          <div className="order-summary-container">
            <div className="summary-head">
              <div className="summary-title">Orders Summary</div>
            </div>
            <div className="summary-body">
              <div className="summary-row">
                <span>Items ({totals.qty}):</span>
                <strong>{formatCurrency(totals.subtotal)}</strong>
              </div>
              <div className="summary-row">
                <span>Shipping:</span>
                <strong>{formatCurrency(totals.shipping)}</strong>
              </div>
              <div className="summary-row">
                <span>Tax (12%):</span>
                <strong>{formatCurrency(totals.tax)}</strong>
              </div>
              <div className="summary-total">
                <span>Total:</span>
                <span className="total-amount">{formatCurrency(totals.grandTotal)}</span>
              </div>
            </div>
          </div>

          <div className="card card-order-details">
            <div className="card-head">
              <span className="card-title">Order Details</span>
              <span style={{ fontSize: '12px', color: 'var(--muted)' }}>
                {items.length} item{items.length !== 1 ? 's' : ''}
              </span>
            </div>
            <div className="card-body">
              <div className="orders-list">
                {items.length === 0 ? (
                  <div className="order-empty">No cart items selected yet.</div>
                ) : (
                  items.map((item, idx) => {
                    const delivery = getDeliveryOption(item.deliveryOptionId);
                    return (
                      <div className="order-item" key={idx}>
                        <div className={`item-thumb ${!item.image ? 'is-empty' : ''}`}>
                          {item.image && <img src={item.image} alt={item.name} />}
                        </div>
                        <div className="item-info">
                          <div className="item-name">{item.name}</div>
                          <div className="item-meta">
                            <div className="item-meta-row"><span>Qty:</span><strong>{item.qty}</strong></div>
                            <div className="item-meta-row"><span>Total:</span><strong>{formatCurrency(item.price * item.qty)}</strong></div>
                            <div className="item-meta-row">
                              <span>Delivery:</span>
                              <strong>{delivery.name} ({delivery.deliveryPrice === 0 ? 'Free' : formatCurrency(delivery.deliveryPrice)})</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </aside>

        <div className="card card-forms">
          <div className="card-head">
            <span className="card-title">Shipping Information</span>
          </div>

          <div className="card-body">
            <label className="autofill-check">
              <input
                type="checkbox"
                checked={shChecked}
                onChange={e => { setShChecked(e.target.checked); fillShipping(e.target.checked) }}
              />
              <span>Same info as account</span>
            </label>

            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input className={`form-input${errors.shName ? ' input-error' : ''}`} type="text" placeholder="Full Name" value={shName} onChange={e => onlyLettersSpaces(e, setShName)} />
                {errors.shName && <span className="field-error">{errors.shName}</span>}
              </div>
              <div className="form-group">
                <label className="form-label">Contact No.</label>
                <input className={`form-input${errors.shPhone ? ' input-error' : ''}`} type="tel" placeholder="09XX XXX XXXX" value={shPhone} onChange={e => onlyPhone(e, setShPhone)} />
                {errors.shPhone && <span className="field-error">{errors.shPhone}</span>}
              </div>
              <div className="form-group full">
                <label className="form-label">Email Address</label>
                <input className={`form-input${errors.shEmail ? ' input-error' : ''}`} type="email" placeholder="your@email.com" value={shEmail} onChange={e => setShEmail(e.target.value)} />
                {errors.shEmail && <span className="field-error">{errors.shEmail}</span>}
              </div>
              <div className="form-group full">
                <label className="form-label">Shipping Address</label>
                <input className={`form-input${errors.shAddr ? ' input-error' : ''}`} type="text" placeholder="Street, Barangay, City, Province, ZIP" value={shAddr} onChange={e => setShAddr(e.target.value)} />
                {errors.shAddr && <span className="field-error">{errors.shAddr}</span>}
              </div>
            </div>
          </div>

          <div className="card-head">
            <span className="card-title">Payment Method / Information</span>
          </div>

          <div className="card-body">
            <div className="pymnt-section">
              <div className="pay-tabs">
                {['visa', 'mastercard', 'gcash', 'maya', 'paypal', 'amex', 'cod'].map(method => (
                  <button
                    key={method}
                    className={`pay-tab ${payMethod === method ? 'active' : ''}`}
                    type="button"
                    onClick={() => { setPayMethod(method); setErrors({}); setEWalletValue(''); setCardNumber(''); setCardExp(''); setCardCvv(''); }}
                  >
                    {method === 'cod' ? 'COD' : method.charAt(0).toUpperCase() + method.slice(1)}
                  </button>
                ))}
              </div>

              {['visa', 'mastercard', 'amex'].includes(payMethod) && (
                <div className="pay-panel active">
                  <div className="form-grid">
                    <label className="autofill-check full">
                      <input
                        type="checkbox"
                        checked={billChecked}
                        onChange={e => { setBillChecked(e.target.checked); fillBilling(e.target.checked) }}
                      />
                      <span>Same info as account and shipping</span>
                    </label>
                    <div className="form-group">
                      <label className="form-label">Billing Full Name</label>
                      <input className={`form-input${errors.billName ? ' input-error' : ''}`} type="text" placeholder="Name on card" value={billName} onChange={e => onlyLettersSpaces(e, setBillName)} />
                      {errors.billName && <span className="field-error">{errors.billName}</span>}
                    </div>
                    <div className="form-group full">
                      <label className="form-label">Billing Address</label>
                      <input className={`form-input${errors.billAddr ? ' input-error' : ''}`} type="text" placeholder="Billing address" value={billAddr} onChange={e => setBillAddr(e.target.value)} />
                      {errors.billAddr && <span className="field-error">{errors.billAddr}</span>}
                    </div>
                    <div className="form-group full">
                      <label className="form-label">Card Number</label>
                      <input
                        className={`form-input${errors.cardNumber ? ' input-error' : ''}`} type="text"
                        placeholder={payMethod === 'amex' ? '**** ****** *****' : '**** **** **** ****'}
                        maxLength={payMethod === 'amex' ? 17 : 19}
                        value={cardNumber}
                        onChange={payMethod === 'amex' ? handleAmexNumber : handleCardNumber}
                      />
                      {errors.cardNumber && <span className="field-error">{errors.cardNumber}</span>}
                    </div>
                    <div className="form-group">
                      <label className="form-label">Expiration Date</label>
                      <input className={`form-input${errors.cardExp ? ' input-error' : ''}`} type="text" placeholder="MM / YY" maxLength={7} value={cardExp} onChange={handleExp} />
                      {errors.cardExp && <span className="field-error">{errors.cardExp}</span>}
                    </div>
                    <div className="form-group">
                      <label className="form-label">CVV</label>
                      <input className={`form-input${errors.cardCvv ? ' input-error' : ''}`} type="password" placeholder={payMethod === 'amex' ? '****' : '***'} maxLength={payMethod === 'amex' ? 4 : 3} value={cardCvv} onChange={onlyCvv} />
                      {errors.cardCvv && <span className="field-error">{errors.cardCvv}</span>}
                    </div>
                  </div>
                </div>
              )}

              {['gcash', 'maya', 'paypal'].includes(payMethod) && (
                <div className="pay-panel active">
                  <div className="form-grid">
                    <div className="form-group full">
                      <label className="form-label">
                        {payMethod === 'paypal' ? 'PayPal Email' : `${payMethod.charAt(0).toUpperCase() + payMethod.slice(1)} Number`}
                      </label>
                      <input
                        className={`form-input${errors.eWallet ? ' input-error' : ''}`}
                        type={payMethod === 'paypal' ? 'email' : 'tel'}
                        placeholder={payMethod === 'paypal' ? 'your@paypal.com' : '09XX XXX XXXX'}
                        value={eWalletValue}
                        onChange={payMethod === 'paypal' ? e => setEWalletValue(e.target.value) : onlyEWalletPhone}
                      />
                      {errors.eWallet && <span className="field-error">{errors.eWallet}</span>}
                    </div>
                  </div>
                </div>
              )}

              {payMethod === 'cod' && (
                <div className="pay-panel active">
                  <div style={{ background: 'rgba(249,219,189,0.4)', border: '1px solid rgba(218,98,125,0.2)', borderRadius: '3px', padding: '16px 18px' }}>
                    <p style={{ fontSize: '13.5px', color: 'var(--wine)', lineHeight: '1.7' }}>
                      Pay in cash upon delivery.<br />
                      <span style={{ color: 'var(--muted)', fontSize: '12.5px' }}>
                        Please have the exact amount ready. Our courier will collect payment on delivery.
                      </span>
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="summary-footer">
              <div className="note-box">
                <span>ℹ️ Note: Please review all information and order details before proceeding.</span>
              </div>
              <div className="summary-footer-btn">
                <button className="place-order-btn" onClick={placeOrder}>Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className={`toast ${toast ? 'show' : ''}`}>{toast}</div>
    </div>
  );
};