export default function Navbar() {
    return(
        <div className="flex items-center sticky top-0 z-50 bg-[#ece0cc] w-full h-20 pr-10 border-b border-b-[#c8b89a]">
            <img src="/logo.png" alt="logo" className="h-full w-auto" />
            <div className="flex flex-col items-start gap-0">
                <p className="text-[#1e160a] text-lg font-bold">haibane renmei</p>
                <p className="text-[#1e160a] text-lg font-bold">灰羽連盟</p>
            </div>
            <div className="ml-auto flex gap-8">
                <a href="/" className="text-[#1e160a] text-md hover:text-[#5c4420] hover:underline transition duration-300">characters</a>
                <a href="/" className="text-[#1e160a] text-md hover:text-[#5c4420] hover:underline transition duration-300">the world</a>
                <a href="/" className="text-[#1e160a] text-md hover:text-[#5c4420] hover:underline transition duration-300">episodes</a>
                <a href="/" className="text-[#1e160a] text-md hover:text-[#5c4420] hover:underline transition duration-300">gallery</a>
            </div>
        </div>
    )
}