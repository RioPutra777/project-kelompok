export default function HolidayPage() {
  return (
    <div className="h-screen text-gray-900 flex justify-center items-center gap-4">
      <div className="bg-gray-50 w-80 p-2 rounded-4xl ">
        <img src={"/golden-gate.jpg"} className="h-72 w-full rounded-4xl" />
        <div className="flex flex-col gap-4 p-4">
          <div>
            <h1 className="text-3xl font-bold">San Francisco</h1>
            <p className="text-gray-400">Premium Economy</p>
          </div>x
          <div className="flex gap-6 flex-wrap">
            <div className="flex gap-2 items-center justify-center">
              <img src={"/tag.svg"} className="h-5 w-5" />
              <p className="font-medium">from $240</p>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <img src={"/plane-tilt.svg"} className="h-5 w-5" />
              <p className="font-medium">SFO</p>
            </div>
          </div>
          <div className="flex justify-between items-center gap-2">
            <button className="bg-black text-white p-3 rounded-full w-56">
              Search flight
            </button>
            <button className="rounded-full border-2 border-gray-200 p-3 flex justify-center items-center">
              <img src={"/heart.svg"} className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 w-80 p-2 rounded-4xl ">
        <img src={"/ikn.jpg"} className="h-72 w-full rounded-4xl" />
        <div className="flex flex-col gap-4 p-4">
          <div>
            <h1 className="text-3xl font-bold">Nusantara</h1>
            <p className="text-gray-400">Premium Economy</p>
          </div>
          <div className="flex gap-6 flex-wrap">
            <div className="flex gap-2 items-center justify-center">
              <img src={"/tag.svg"} className="h-5 w-5" />
              <p className="font-medium">from $100</p>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <img src={"/plane-tilt.svg"} className="h-5 w-5" />
              <p className="font-medium">IKN</p>
            </div>
          </div>
          <div className="flex justify-between items-center gap-2">
            <button className="bg-black text-white p-3 rounded-full w-56">
              Search flight
            </button>
            <button className="rounded-full border-2 border-gray-200 p-3 flex justify-center items-center">
              <img src={"/heart.svg"} className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}