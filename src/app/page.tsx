import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="bg-[#f5ede0]">
      <Navbar />
      <div className="flex items-center  border-b border-b-[#c8b89a] bg-[#f5ede0]">
        <div className="w-1/2 pl-12">
          <h1 className="text-[#1e160a] text-7xl font-semibold">haibane <br /> renmei</h1>
          <h2 className="text-[#4a3c28] text-3xl font-semibold">灰羽連盟</h2>
          <p className="mt-10 text-[#1e160a] text-lg font-light max-w-xl">
            Haibane Renmei is an anime that centers around the angel like beings, the Haibane, and their daily lives inside the walled town of Giles.
            Ultimately, the goal for all Haibane are to find closure and to resolve their original sin so that they have their own Day of Flight.
          </p>
          <button className="mt-5 px-6 py-3 text-md bg-[#ece0cc] text-[#1e160a] border border-[#c8b89a]
          hover:text-[#ece0cc] hover:bg-[#1e160a] transition duration-300">enter giles</button>
          <p className="text-[#4a3c28] text-sm">_/_link_to_giles_map_/</p>
        </div>
        <div className="relative w-1/2">
          <img src="/homepage1.png" className="w-full h-[600px] object-cover" />
          <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#f5ede0] to-transparent" />
        </div>
      </div>
      
      <div className="flex items-center  border-b border-b-[#c8b89a] bg-[#f5ede0]">
        <div className="relative w-1/2">
          <img src="/homepage2.png" className="w-full h-[600px] object-cover" />
          <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#f5ede0] to-transparent" />
        </div>
        <div className="w-1/2 pl-12">
          <h1 className="text-[#1e160a] text-7xl font-semibold">why <br /> watch?</h1>
          <h2 className="text-[#4a3c28] text-3xl font-semibold italic mt-3">"Can you tell me where I am? And what's Haibane?" <br /> - Rakka</h2>
          <p className="mt-10 text-[#1e160a] text-lg font-light max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>

      <div className="flex items-center  border-b border-b-[#c8b89a] bg-[#f5ede0]">
        <div className="w-1/2 pl-12">
          <h1 className="text-[#1e160a] text-7xl font-semibold">giga <br /> penis</h1>
          <h2 className="text-[#4a3c28] text-3xl font-semibold">penis penis penis penis penis</h2>
          <p className="mt-10 text-[#1e160a] text-lg font-light max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <div className="relative w-1/2">
          <img src="/homepage3.png" className="w-full h-[600px] object-cover" />
          <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#f5ede0] to-transparent" />
        </div>
      </div>

      <Footer />
    </div>

  );
}
