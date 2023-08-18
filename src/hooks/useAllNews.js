export const allNews = async () => {
    const res = await fetch(`https://the-universal-news.vercel.app/api/all-news`)
    if (!res.ok) {
        throw new Error('Failed to fetch data!')
    }
    return res.json();
}
