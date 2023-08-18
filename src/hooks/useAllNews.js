export const allNews = async () => {
    const res = await fetch(`http://localhost:3000/api/all-news`)
    if (!res.ok) {
        throw new Error('Failed to fetch data!')
    }
    return res.json();
}
