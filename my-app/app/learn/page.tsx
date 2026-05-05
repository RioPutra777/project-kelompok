export default function learnPage() {
    return(
    <div className="bg-white h-screen flex gap-10 justify-center items-center">
        <div className="bg-purple-300 h-72 w-94 flex flex-col justify-between p-8 rounded-4xl">
            <div className="flex gap-4">
                <img src="/palette.svg"/>
                <p className="text-black">Design</p>
            </div>
            <div>
                <h1 className="text-4xl text-black font-bold">Figma</h1>
                <p className="text-black"> 8 hours ago</p>
            </div>
        </div>

        <div className="bg-yellow-300 h-72 w-94 flex flex-col justify-between p-8 rounded-4xl">
            <div className="flex gap-4">
                <img src="/palette.svg"/>
                <p className="text-black">Design</p>
            </div>
            <div>
                <h1 className="text-4xl text-black font-bold">Python</h1>
                <p className="text-black"> 3 days ago</p>
            </div>
        </div>

        <div className="bg-green-300 h-72 w-94 flex flex-col justify-between p-8 rounded-4xl">
            <div className="flex gap-4">
                <img src="/palette.svg"/>
                <p className="text-black">Design</p>
            </div>
            <div>
                <h1 className="text-4xl text-black font-bold">Sketch</h1>
                <p className="text-black"> 6 days ago</p>
            </div>
        </div>
    </div>
    )

}