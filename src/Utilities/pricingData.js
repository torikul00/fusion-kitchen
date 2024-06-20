// pricing and features data: standard, premium, enterprise

const pricingData = [
    {
        id: 111,
        feature: "Order processing",
        subFeatures: [
            { id: 111.111, name: "POS Order Limits", standard: true, premium: true, enterprise: true },
            { id: 111.222, name: "In-store", standard: true, premium: true, enterprise: true },
            { id: 111.333, name: "Collection", standard: true, premium: true, enterprise: true },
            { id: 111.444, name: "Telephone", standard: true, premium: true, enterprise: true },
            { id: 111.555, name: "Takeway & delivery", standard: true, premium: true, enterprise: true },
            { id: 111.666, name: "Online ordering", standard: true, premium: true, enterprise: true },
            { id: 111.777, name: "QR Mobile Order & Pay", standard: true, premium: true, enterprise: true },
        ]
    },
    {
        id: 222,
        feature: "Menu & POS features",
        subFeatures: [
            { id: 222.111, name: "Menu management", standard: true, premium: true, enterprise: true },
            { id: 222.222, name: "Interactive menu builder", standard: true, premium: true, enterprise: true },
            { id: 222.333, name: "Meal deals", standard: true, premium: true, enterprise: true },
            { id: 222.444, name: "Promotions & discounts", standard: true, premium: true, enterprise: true },
            { id: 222.555, name: "Multi-user log on", standard: true, premium: true, enterprise: true },
            { id: 222.666, name: "Integrated kitchen printers", standard: true, premium: true, enterprise: true },
            { id: 222.777, name: "Powerful business reporting", standard: true, premium: true, enterprise: true },
        ]
    },
    {
        id: 333,
        feature: "Digital ordering",
        subFeatures: [
            { id: 333.111, name: "Interactive website builder", standard: true, premium: true, enterprise: true },
            { id: 333.222, name: "Online ordering platform", standard: true, premium: true, enterprise: true },
            { id: 333.333, name: "Branded mobile app", standard: true, premium: true, enterprise: true },
            { id: 333.444, name: "QR Mobile Order & Pay", standard: true, premium: true, enterprise: true }
        ]
    },
    {
        id: 444,
        feature: "Stock management",
        subFeatures: [
            { id: 444.111, name: "Item stock tracking", standard: true, premium: true, enterprise: true },
            { id: 444.222, name: "Ingredient stock tracking", standard: true, premium: true, enterprise: true },
            { id: 444.333, name: "Spillage + wastage tracking", standard: true, premium: true, enterprise: true },
            { id: 444.444, name: "Supplier management", standard: true, premium: true, enterprise: true },
            { id: 444.555, name: "Automatic stock PO creation", standard: true, premium: true, enterprise: true },
            { id: 444.666, name: "Stock take app", standard: true, premium: true, enterprise: true },
            { id: 444.777, name: "Out of stock notification", standard: true, premium: true, enterprise: true },
        ]
    },
    {
        id: 555,
        feature: "Delivery management",
        subFeatures: [
            { id: 555.111, name: "Delivery management Hub", standard: true, premium: true, enterprise: true },
            { id: 555.222, name: "Delivery driver app", standard: true, premium: true, enterprise: true },
            { id: 555.333, name: "Live driver tracking", standard: true, premium: true, enterprise: true },
            { id: 555.444, name: "Google Maps integration", standard: true, premium: true, enterprise: true },
            { id: 555.555, name: "Delivery reporting", standard: true, premium: true, enterprise: true },
            { id: 555.666, name: "Driver commissions calculator", standard: true, premium: true, enterprise: true }
        ]
    },
    {
        id: 666,
        feature: "Staff management",
        subFeatures: [
            { id: 666.111, name: "Staff HR management", standard: true, premium: true, enterprise: true },
            { id: 666.222, name: "Staff rota & shift builder", standard: true, premium: true, enterprise: true },
            { id: 666.333, name: "Staff shift tracker", standard: true, premium: true, enterprise: true },
            { id: 666.444, name: "Staff clock-in / clock-out", standard: true, premium: true, enterprise: true },
            { id: 666.555, name: "Staff productivity tracking", standard: true, premium: true, enterprise: true }
        ]
    },
    {
        id: 777,
        feature: "Integrations",
        subFeatures: [
            { id: 777.111, name: "Xero Acounting", standard: true, premium: true, enterprise: true },
            { id: 777.222, name: "Dojo", standard: true, premium: true, enterprise: true },
            { id: 777.333, name: "Paymentsense", standard: true, premium: true, enterprise: true },
            { id: 777.444, name: "Evo", standard: true, premium: true, enterprise: true },
            { id: 777.555, name: "SumUp", standard: true, premium: true, enterprise: true }
        ]
    },
    {
        id: 888,
        feature: "Table management",
        subFeatures: [
            { id: 888.111, name: "Floor plan builder", standard: false, premium: true, enterprise: true },
            { id: 888.222, name: "Reservation management", standard: false, premium: true, enterprise: true },
            { id: 888.333, name: "Online table booking", standard: false, premium: true, enterprise: true },
            { id: 888.444, name: "Waiter pad ordering", standard: false, premium: true, enterprise: true }
        ]
    },
    {
        id: 999,
        feature: "Customer loyalty",
        subFeatures: [
            { id: 999.111, name: "Customer management", standard: false, premium: true, enterprise: true },
            { id: 999.222, name: "Customer loyalty scheme", standard: false, premium: true, enterprise: true },
            { id: 999.333, name: "Gift cards/vouchers", standard: false, premium: true, enterprise: true },
        ]
    },
    {
        id: 101010,
        feature: "Marketing suite",
        subFeatures: [
            { id: 101010.111, name: "Customer targeting", standard: false, premium: true, enterprise: true },
            { id: 101010.222, name: "MailChimp integration", standard: false, premium: true, enterprise: true },
            { id: 101010.333, name: "SMS text messages", standard: false, premium: true, enterprise: true },
            { id: 101010.444, name: "Mobile app push notifications", standard: false, premium: true, enterprise: true },
        ]
    },
    {
        id: 111111,
        feature: "Location management",
        subFeatures: [
            { id: 111111.111, name: "Multi-location dashboards", standard: false, premium: false, enterprise: true },
            { id: 111111.222, name: "Multi-location user permissions", standard: false, premium: false, enterprise: true },
            { id: 111111.333, name: "Multi-location online ordering", standard: false, premium: false, enterprise: true },
            { id: 111111.444, name: "Advanced business reporting", standard: false, premium: false, enterprise: true }
        ]
    },
    {
        id: 121212,
        feature: "Enterprise / large business",
        subFeatures: [
            { id: 121212.111, name: "Advanced network reporting", standard: false, premium: false, enterprise: true },
            { id: 121212.222, name: "Store location grouping", standard: false, premium: false, enterprise: true },
            { id: 121212.333, name: "Multi-location menu control", standard: false, premium: false, enterprise: true },
            { id: 121212.444, name: "Advanced group reporting", standard: false, premium: false, enterprise: true },
            { id: 121212.555, name: "Store location grouping", standard: false, premium: false, enterprise: true },
            { id: 121212.666, name: "Bespoke reporting", standard: false, premium: false, enterprise: true },
            { id: 121212.777, name: "Multi-location menu control", standard: false, premium: false, enterprise: true },
            { id: 121212.888, name: "Cross location user management", standard: false, premium: false, enterprise: true },
            { id: 121212.999, name: "Cross location customer data sharing", standard: false, premium: false, enterprise: true },
            { id: 121212.101010, name: "Cross location promotions & discounts", standard: false, premium: false, enterprise: true },
            { id: 121212.111111, name: "Cross location user management", standard: false, premium: false, enterprise: true }
        ]
    },
    {
        id: 131313,
        feature: "Franchise management",
        subFeatures: [
            { id: 131313.111, name: "Franchisee management", standard: false, premium: false, enterprise: true },
            { id: 131313.222, name: "Franchisee sales tracking", standard: false, premium: false, enterprise: true },
            { id: 131313.333, name: "Royalty & franchise fee tracking", standard: false, premium: false, enterprise: true },
            { id: 131313.444, name: "Payment routing", standard: false, premium: false, enterprise: true },
            { id: 131313.555, name: "Store location grouping", standard: false, premium: false, enterprise: true },
        ]
    },
    {
        id: 141414,
        feature: "Customer support",
        subFeatures: [
            { id: 141414.111, name: "Installation & setup call", standard: true, premium: true, enterprise: true },
            { id: 141414.222, name: "Unlimited staff training", standard: true, premium: true, enterprise: true },
            { id: 141414.333, name: "1-1 marketing support", standard: true, premium: true, enterprise: true },
            { id: 141414.444, name: "Account review calls", standard: true, premium: true, enterprise: true },
            { id: 141414.555, name: "24/7 WhatsApp support", standard: true, premium: true, enterprise: true },
            { id: 141414.666, name: "24/7 email support", standard: true, premium: true, enterprise: true },
            { id: 141414.777, name: "24/7 Telephone support", standard: true, premium: true, enterprise: true },
            { id: 141414.888, name: "Success Manager", standard: true, premium: true, enterprise: true },
            { id: 141414.999, name: "Dedicated Account Manager", standard: false, premium: false, enterprise: true },
            { id: 141414.101010, name: "Bespoke feature requests", standard: false, premium: false, enterprise: true }
        ]
    }
]

export default pricingData;