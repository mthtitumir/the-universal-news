export const categories = async (category) => {
  const res = await fetch(`${process.env.NEXT_BASE_Api}/api/category?category=${category}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data!')
  }
  return res.json();
}
