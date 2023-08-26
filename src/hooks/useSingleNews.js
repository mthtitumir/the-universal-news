export const singleNews = async (id) => {
  const res = await fetch(`${process.env.NEXT_BASE_Api}/api/all-news/${id}`, {
    cache: "no-store"
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data!')
  }
  return res.json();
}
