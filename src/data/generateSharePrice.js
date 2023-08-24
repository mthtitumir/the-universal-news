export const generatePrice = () => {
    const stocks = [
        { name: "Tesla", number: 4.5 },
        { name: "Walmart", number: -0.5 },
        { name: "Google", number: 3.5 },
        { name: "Microsoft", number: -5.5 },
        { name: "Apple", number: 2.5 },
        { name: "Snapchat", number: 1.5 },
        { name: "Meta", number: -0.79 },
        { name: "Amazon", number: 0.32 },
        { name: "Snapchat", number: -0.25 },
    ];

    const randomIndex = Math.floor(Math.random() * stocks.length);
    return stocks[randomIndex];
}