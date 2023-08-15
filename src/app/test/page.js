import React from 'react'

const Test = async () => {
  const response = await fetch("http://localhost:3000/api/all-news")
  const data = await response.json()
  console.log(data)
  return (
    <div>Test herer
      <h1>{data[0].title}</h1> 
      <h2>test2 likheche</h2>
    </div>
  )
}

export default Test