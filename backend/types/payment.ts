export interface PaymentMethod {
  type: 'card' | 'ewallet' | 'paypal';
  provider: 'visa' | 'mastercard' | 'amex' | 'gcash' | 'maya' | 'paypal';
  label: string; 
  isDefault: boolean;
}