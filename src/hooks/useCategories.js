export const categories = async (category) => {
  const res = await fetch(`http://localhost:3000/api/category?category=${category}`)
  if(!res.ok) {
    throw new Error('Failed to fetch data!')
  }
  return res.json();
}
