export const singleNews = async (id) => {
    const res = await fetch(`http://localhost:3000/api/all-news/${id}`)
    if (!res.ok) {
      throw new Error('Failed to fetch data!')
    }
    return res.json();
}
  