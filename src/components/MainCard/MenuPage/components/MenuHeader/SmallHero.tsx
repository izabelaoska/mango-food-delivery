export const SmallHero = () => {
  return (
    <>
      <div className="relative p-6 mx-6 bg-[#FFECD0] rounded-3xl flex justify-between overflow-hidden">
        <div className="stripes">
          <div className="stripe left-[-251px] bg-[#ff0000]" />
          <div className="stripe left-[-195px] bg-[#ff4d00]" />
          <div className="stripe left-[-140px] bg-[#ff7400]" />
          <div className="stripe left-[-85px] bg-[#ff9a00]" />
          <div className="stripe left-[-35px] bg-[#ffc100]" />
        </div>
        <div>
          <h2 className="text-lg">Hello Jeremy</h2>
          <p className="mb-2 text-sm">
            Get free delivery every £20 purchase
          </p>
          <button className="btn btn-neutral btn-sm rounded-3xl bg-[#FB9401] border-none focus:bg-[#FB9401]">
            Learn more
          </button>
        </div>
      </div>
    </>
  )
}
