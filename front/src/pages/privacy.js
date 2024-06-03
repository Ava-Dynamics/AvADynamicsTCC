import Footer from "../components/Footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { privacyItems } from "../utils/privacyItems";

function Privacy() {
  return (
    <div className="antialiased min-h-screen h-full px-7 md:px-10 xl:px-28 2xl:px-72">
      <Navbar hideMenu />
      <div className="min-h-60 flex justify-center items-center bg-finscorePurple">
        <span className="text-4xl">Política de Privacidade</span>
      </div>
      <div className="h-full pb-10 border-x-4 border-b-4 border-slate-600 mb-24">
        {privacyItems.map((item, index) => (
          <div className="px-4 pt-10" key={index}>
            <span className="text-md tracking-wide">{item}</span>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Privacy;
