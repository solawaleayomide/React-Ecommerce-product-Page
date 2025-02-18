import Button from "./button";

function DescriptionSection() {
  return (
    <div className="flex-1">
      <div className="flex flex-col justify-center md:my-auto">
        <div className="flex flex-col gap-2">
          <span className="text-sm text-slate-400 font-semibold">
            SNEAKER COMPANY
          </span>
          <h1 className="font-bold text-3xl">
            Fall Limited Edition <br />
            Sneakers
          </h1>
        </div>

        <div className="mt-6 flex flex-col gap-4">
          <p className="text-slate-500">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>

          <div className="flex lg:flex-col items-center lg:items-start justify-between lg:justify-start gap-1 mt-5 ">
            <div className="flex gap-4">
              <span className="font-bold text-2xl">$125.00</span>
              <button className="bg-black text-white py-1 px-2 rounded-md">
                50%
              </button>
            </div>

            <span className="text-slate-500 font-semibold line-through">
              $250.00
            </span>
          </div>
        </div>

        <div className="mt-7 cursor-pointer">
          <Button />
        </div>
      </div>
    </div>
  );
}

export default DescriptionSection;
