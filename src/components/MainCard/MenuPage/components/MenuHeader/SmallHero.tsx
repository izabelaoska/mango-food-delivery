export const SmallHero = () => {
  return (
    <>
      <div className="relative flex justify-between p-6 mx-6 overflow-hidden bg-beige_fill rounded-3xl">
        <div className="stripes">
          <div className="stripe left-[-251px] bg-orange_500" />
          <div className="stripe left-[-195px] bg-orange_400" />
          <div className="stripe left-[-140px] bg-orange_300" />
          <div className="stripe left-[-85px] bg-orange_200" />
          <div className="stripe left-[-35px] bg-orange_100" />
        </div>
        <div>
          <h2 className="text-lg">Hello Jeremy</h2>
          <p className="mb-2 text-sm">
            Get free delivery every £20 purchase
          </p>
          <button className="border-none btn btn-neutral btn-sm rounded-3xl bg-orange_fill hover:bg-orange_fill">
            Learn more
          </button>
        </div>
      </div>
    </>
  )
}
