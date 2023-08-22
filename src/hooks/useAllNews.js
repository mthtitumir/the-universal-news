export const allNews = async () => {
    const res = await fetch(`${process.env.NEXT_BASE_Api}/api/all-news`)
    if (!res.ok) {
        throw new Error('Failed to fetch data!')
    }
    return res.json();
}
