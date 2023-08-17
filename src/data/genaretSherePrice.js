export const genaretPrice = () => {
    const stocks = [
        { name: "Tesla", number: 4.5},
        { name: "Google", number: 3.5 },
        { name: "Microsoft", number: 5.5 },
        { name: "Apple", number: 2.5 },
        { name: "Snap", number: 1.5 }
    ];

    const randomIndex = Math.floor(Math.random() * stocks.length);
    return stocks[randomIndex];
}