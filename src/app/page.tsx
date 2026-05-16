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
          <p className="mt-10 text-[#1e160a] text-lg font-light max-w-sm">
            Haibane Renmei is an anime that centers around the angel like beings, the Haibane, and their daily lives inside the walled town of Giles.
            Ultimately, the goal for all Haibane are to find closure and to resolve their original sin so that they have their own Day of Flight.
          </p>
        </div>
        <div className="relative w-1/2">
          <img src="/homepage1.png" className="w-full h-[600px] object-cover" />
          <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-[#f5ede0] to-transparent" />
        </div>
      </div>
      <Footer />
    </div>

  );
}
