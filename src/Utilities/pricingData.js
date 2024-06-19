// pricing and features data: standard, premium, enterprise

const pricingData = [
    {
        id: 1,
        feature: "Order processing",
        subFeatures: [
            { id: 1.1, name: "Menu management", standard: true, premium: true, enterprise: true },
            { id: 1.2, name: "Interactive menu builder", standard: true, premium: true, enterprise: true },
            { id: 1.3, name: "Meal deals", standard: true, premium: true, enterprise: true },
            { id: 1.4, name: "Promotions & discounts", standard: false, premium: true, enterprise: true },
            { id: 1.5, name: "Multi-user log on", standard: true, premium: true, enterprise: true },
            { id: 1.6, name: "Integrated kitchen printers", standard: true, premium: true, enterprise: true },
            { id: 1.7, name: "Powerful business reporting", standard: false, premium: false, enterprise: true },
        ]
    },
    {
        id: 2,
        feature: "Menu & POS features",
        subFeatures: [
            { id: 2.1, name: "Menu management", standard: true, premium: true, enterprise: true },
            { id: 2.2, name: "Interactive menu builder", standard: true, premium: true, enterprise: true },
            { id: 2.3, name: "Meal deals", standard: true, premium: true, enterprise: true },
            { id: 2.4, name: "Promotions & discounts", standard: false, premium: true, enterprise: true },
            { id: 2.5, name: "Multi-user log on", standard: true, premium: true, enterprise: true },
            { id: 2.6, name: "Integrated kitchen printers", standard: true, premium: true, enterprise: true },
            { id: 2.7, name: "Powerful business reporting", standard: false, premium: false, enterprise: true },
        ]
    },
    {
        id: 3,
        feature: "Digital ordering",
        subFeatures: [
            { id: 3.1, name: "Menu management", standard: true, premium: true, enterprise: true },
            { id: 3.2, name: "Interactive menu builder", standard: true, premium: true, enterprise: true },
            { id: 3.3, name: "Meal deals", standard: true, premium: true, enterprise: true },
            { id: 3.4, name: "Promotions & discounts", standard: false, premium: true, enterprise: true },
            { id: 3.5, name: "Multi-user log on", standard: true, premium: true, enterprise: true },
            { id: 3.6, name: "Integrated kitchen printers", standard: true, premium: true, enterprise: true },
            { id: 3.7, name: "Powerful business reporting", standard: false, premium: false, enterprise: true },
        ]
    },
    {
        id: 4,
        feature: "Stock management",
        subFeatures: [
            { id: 4.1, name: "Menu management", standard: true, premium: true, enterprise: true },
            { id: 4.2, name: "Interactive menu builder", standard: true, premium: true, enterprise: true },
            { id: 4.3, name: "Meal deals", standard: true, premium: true, enterprise: true },
            { id: 4.4, name: "Promotions & discounts", standard: false, premium: true, enterprise: true },
            { id: 4.5, name: "Multi-user log on", standard: true, premium: true, enterprise: true },
            { id: 4.6, name: "Integrated kitchen printers", standard: true, premium: true, enterprise: true },
            { id: 4.7, name: "Powerful business reporting", standard: false, premium: false, enterprise: true },
        ]
    },
    {
        id: 5,
        feature: "Delivery management",
        subFeatures: [
            { id: 5.1, name: "Menu management", standard: true, premium: true, enterprise: true },
            { id: 5.2, name: "Interactive menu builder", standard: true, premium: true, enterprise: true },
            { id: 5.3, name: "Meal deals", standard: true, premium: true, enterprise: true },
            { id: 5.4, name: "Promotions & discounts", standard: false, premium: true, enterprise: true },
            { id: 5.5, name: "Multi-user log on", standard: true, premium: true, enterprise: true },
            { id: 5.6, name: "Integrated kitchen printers", standard: true, premium: true, enterprise: true },
            { id: 5.7, name: "Powerful business reporting", standard: false, premium: false, enterprise: true },
        ]
    },
    {
        id: 6,
        feature: "Staff management",
        subFeatures: [
            { id: 6.1, name: "Menu management", standard: true, premium: true, enterprise: true },
            { id: 6.2, name: "Interactive menu builder", standard: true, premium: true, enterprise: true },
            { id: 6.3, name: "Meal deals", standard: true, premium: true, enterprise: true },
            { id: 6.4, name: "Promotions & discounts", standard: false, premium: true, enterprise: true },
            { id: 6.5, name: "Multi-user log on", standard: true, premium: true, enterprise: true },
            { id: 6.6, name: "Integrated kitchen printers", standard: true, premium: true, enterprise: true },
            { id: 6.7, name: "Powerful business reporting", standard: false, premium: false, enterprise: true },
        ]
    },
    {
        id: 7,
        feature: "Integrations",
        subFeatures: [
            { id: 7.1, name: "Menu management", standard: true, premium: true, enterprise: true },
            { id: 7.2, name: "Interactive menu builder", standard: true, premium: true, enterprise: true },
            { id: 7.3, name: "Meal deals", standard: true, premium: true, enterprise: true },
            { id: 7.4, name: "Promotions & discounts", standard: false, premium: true, enterprise: true },
            { id: 7.5, name: "Multi-user log on", standard: true, premium: true, enterprise: true },
            { id: 7.6, name: "Integrated kitchen printers", standard: true, premium: true, enterprise: true },
            { id: 7.7, name: "Powerful business reporting", standard: false, premium: false, enterprise: true },
        ]
    },
    {
        id: 8,
        feature: "Table management",
        subFeatures: [
            { id: 8.1, name: "Menu management", standard: true, premium: true, enterprise: true },
            { id: 8.2, name: "Interactive menu builder", standard: true, premium: true, enterprise: true },
            { id: 8.3, name: "Meal deals", standard: true, premium: true, enterprise: true },
            { id: 8.4, name: "Promotions & discounts", standard: false, premium: true, enterprise: true },
            { id: 8.5, name: "Multi-user log on", standard: true, premium: true, enterprise: true },
            { id: 8.6, name: "Integrated kitchen printers", standard: true, premium: true, enterprise: true },
            { id: 8.7, name: "Powerful business reporting", standard: false, premium: false, enterprise: true },
        ]
    },
    {
        id: 9,
        feature: "Customer loyalty",
        subFeatures: [
            { id: 9.1, name: "Menu management", standard: true, premium: true, enterprise: true },
            { id: 9.2, name: "Interactive menu builder", standard: true, premium: true, enterprise: true },
            { id: 9.3, name: "Meal deals", standard: true, premium: true, enterprise: true },
            { id: 9.4, name: "Promotions & discounts", standard: false, premium: true, enterprise: true },
            { id: 9.5, name: "Multi-user log on", standard: true, premium: true, enterprise: true },
            { id: 9.6, name: "Integrated kitchen printers", standard: true, premium: true, enterprise: true },
            { id: 9.7, name: "Powerful business reporting", standard: false, premium: false, enterprise: true },
        ]
    },
    {
        id: 10,
        feature: "Marketing suite",
        subFeatures: [
            { id: 10.1, name: "Menu management", standard: true, premium: true, enterprise: true },
            { id: 10.2, name: "Interactive menu builder", standard: true, premium: true, enterprise: true },
            { id: 10.3, name: "Meal deals", standard: true, premium: true, enterprise: true },
            { id: 10.4, name: "Promotions & discounts", standard: false, premium: true, enterprise: true },
            { id: 10.5, name: "Multi-user log on", standard: true, premium: true, enterprise: true },
            { id: 10.6, name: "Integrated kitchen printers", standard: true, premium: true, enterprise: true },
            { id: 10.7, name: "Powerful business reporting", standard: false, premium: false, enterprise: true },
        ]
    },
    {
        id: 11,
        feature: "Location management",
        subFeatures: [
            { id: 11.1, name: "Menu management", standard: true, premium: true, enterprise: true },
            { id: 11.2, name: "Interactive menu builder", standard: true, premium: true, enterprise: true },
            { id: 11.3, name: "Meal deals", standard: true, premium: true, enterprise: true },
            { id: 11.4, name: "Promotions & discounts", standard: false, premium: true, enterprise: true },
            { id: 11.5, name: "Multi-user log on", standard: true, premium: true, enterprise: true },
            { id: 11.6, name: "Integrated kitchen printers", standard: true, premium: true, enterprise: true },
            { id: 11.7, name: "Powerful business reporting", standard: false, premium: false, enterprise: true },
        ]
    },
    {
        id: 12,
        feature: "Enterprise / large business",
        subFeatures: [
            { id: 12.1, name: "Menu management", standard: true, premium: true, enterprise: true },
            { id: 12.2, name: "Interactive menu builder", standard: true, premium: true, enterprise: true },
            { id: 12.3, name: "Meal deals", standard: true, premium: true, enterprise: true },
            { id: 12.4, name: "Promotions & discounts", standard: false, premium: true, enterprise: true },
            { id: 12.5, name: "Multi-user log on", standard: true, premium: true, enterprise: true },
            { id: 12.6, name: "Integrated kitchen printers", standard: true, premium: true, enterprise: true },
            { id: 12.7, name: "Powerful business reporting", standard: false, premium: false, enterprise: true },
        ]
    },
    {
        id: 13,
        feature: "Franchise management",
        subFeatures: [
            { id: 13.1, name: "Menu management", standard: true, premium: true, enterprise: true },
            { id: 13.2, name: "Interactive menu builder", standard: true, premium: true, enterprise: true },
            { id: 13.3, name: "Meal deals", standard: true, premium: true, enterprise: true },
            { id: 13.4, name: "Promotions & discounts", standard: false, premium: true, enterprise: true },
            { id: 13.5, name: "Multi-user log on", standard: true, premium: true, enterprise: true },
            { id: 13.6, name: "Integrated kitchen printers", standard: true, premium: true, enterprise: true },
            { id: 13.7, name: "Powerful business reporting", standard: false, premium: false, enterprise: true },
        ]
    }
]

export default pricingData;