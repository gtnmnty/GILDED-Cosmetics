"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const accordion_1 = require("./data/about-us/accordion");
const reviews_1 = require("./data/about-us/reviews");
const account_payments_1 = require("./data/faqs/account-payments");
const appointments_booking_1 = require("./data/faqs/appointments-booking");
const orders_delivery_1 = require("./data/faqs/orders-delivery");
const products_aftercare_1 = require("./data/faqs/products-aftercare");
const services_pricing_1 = require("./data/faqs/services-pricing");
const shipping_returns_1 = require("./data/faqs/shipping-returns");
const services_1 = require("./data/services");
const products_1 = require("./data/products");
const deliveryOption_1 = require("./data/deliveryOption");
const mongoose_1 = __importDefault(require("mongoose"));
const mongoURI = 'mongodb+srv://Monty:Dbnip777@cluster0.wcj1q1o.mongodb.net/?appName=Cluster0';
mongoose_1.default.connect(mongoURI)
    .then(() => console.log('✅ Connected to Gilded Vault (MongoDB)'))
    .catch((err) => console.error('❌ Connection error:', err));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// A basic route so we can see it working
app.get('/', (req, res) => {
    res.send('GILDED Backend is officially running! ✨');
});
// About Us Page
app.get('/api/about/accordion', (req, res) => {
    res.json(accordion_1.accordions);
});
// Faqs Page
app.get('/api/faqs', (req, res) => {
    res.json({
        accountPayments: account_payments_1.accountPayments,
        appointmentsBooking: appointments_booking_1.appointmentsBooking,
        ordersDelivery: orders_delivery_1.ordersDelivery,
        productsAftercare: products_aftercare_1.productsAftercare,
        servicesPricing: services_pricing_1.servicesPricing,
        shippingReturns: shipping_returns_1.shippingReturns,
    });
});
// Services
app.get('/api/services', (req, res) => {
    res.json(services_1.services);
});
// Products
app.get('/api/products', (req, res) => {
    res.json(products_1.products);
});
// Delviery Options
app.get('/api/services', (req, res) => {
    res.json(deliveryOption_1.deliveryOpts);
});
app.get('/api/about/reviews', (req, res) => {
    res.json(reviews_1.reviews);
});
app.listen(PORT, () => {
    console.log(`🚀 Server is flying at http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map