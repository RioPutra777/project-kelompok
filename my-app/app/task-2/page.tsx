export default function Task2Page() {
  return (
    <div className="bg-white h-screen flex gap-10 justify-center items-center">

      <div className="bg-blue-200 h-65 w-96 flex flex-col justify-between p-8 rounded-3xl shadow-md">
        <div className="flex gap-4 items-center">
          <img src="/palette.svg" alt="icon" className="w-6 h-6"/>
          <p className="text-black font-medium">Design</p>
        </div>
        <div>
          <h1 className="text-2xl text-black font-bold">Adobe Photoshop</h1>
          <div className="flex items-center justify-between mt-2">
          <p className="text-black">in 4 days</p>
            <div className="flex">
              <img src="/op1.jpg" className="w-8 h-8 rounded-full border-2 border-white"/>
              <img src="/op2.jpg" className="w-8 h-8 rounded-full border-2 border-white -ml-4"/>
              <img src="/op3.jpg" className="w-8 h-8 rounded-full border-2 border-white -ml-4"/>
                <div className="w-8 h-8 rounded-full bg-blue-200 text-xs flex items-center justify-center font-medium text-black border-2 border-white -ml-3.5">
                 9+
                </div>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-green-200 h-65 w-96 flex flex-col justify-between p-8 rounded-3xl shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <img src="/terminal-2.svg" alt="icon" className="w-6 h-6"/>
            <p className="text-black font-medium">AI</p>
          </div>
          <img src="/star.svg" alt="star" className="w-5 h-5"/>
        </div>
        
        <div>
          <h1 className="text-2xl text-black font-bold">DALL·E 2, Midjourney, Stable Diffusion</h1>
          <div className="flex items-center justify-between mt-2">
            <p className="text-black">in 5 days</p>
            <div className="flex">
              <img src="/op4.jpg" className="w-8 h-8 rounded-full border-2 border-white -ml-4"/>
              <img src="/op5.jpg" className="w-8 h-8 rounded-full border-2 border-white -ml-4"/>
              <img src="/op6.jpg" className="w-8 h-8 rounded-full border-2 border-white -ml-4"/>
              <div className="w-8 h-8 rounded-full bg-green-200 text-xs flex items-center justify-center font-medium text-black border-2 border-white -ml-3.5">
               3+
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}