export const categories = async (category) => {
  const res = await fetch(`https://the-universal-news.vercel.app/api/category?category=${category}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data!')
  }
  return res.json();
}
