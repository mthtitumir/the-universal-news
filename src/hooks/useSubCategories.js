export const subCategories = async (subCategory) => {
    const res = await fetch(`${process.env.NEXT_BASE_Api}/api/subcategory?subcategory=${subCategory}`)
    if (!res.ok) {
      throw new Error('Failed to fetch data!')
    }
    return res.json();
  }
  