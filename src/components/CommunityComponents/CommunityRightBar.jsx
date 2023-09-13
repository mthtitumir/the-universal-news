const CommunityRightBar = () => {
  const style = "p-3 bg-slate-100 shadow-md mt-5 rounded-xl";
  const trendingWords = ["PakVSInd", "SheikhHasina", "Morocco_Earthquake", "Biden"];
  return (
    <div className="px-4">
      <label htmlFor="search"> {/* search field */}
        <input className="w-full focus:outline-none shadow-md rounded-3xl px-3 py-3 bg-slate-200 text-xl" type="text" name="" id="search" placeholder={"Search"} />
      </label>
      <div className={`${style} flex flex-col gap-3`}> {/*subscribe CTA*/}
        <h1 className="text-2xl mt-2">Subscribe to <span className="text-red-600">Premium</span></h1>
        <p className="">Subscribe to unlock all news and articles, and get weekly newsletter.</p>
        <button className="primary-btn">Subscribe</button>
      </div>
      <div className={style}> {/*trending*/}
          <h1 className="text-2xl my-2">Trending for you</h1>
          <div className="flex flex-col gap-3 ">
              {
                trendingWords?.map(word => <div key={word}>
                  <h1 className="text-lg font-semibold"> #{word} </h1>
                  <p className="text-gray-500">5,492 posts</p>
                  </div>)
              }
          </div>
      </div>
    </div>
  )
}

export default CommunityRightBar