import { IoIosFingerPrint } from "react-icons/io";
import {
  LiaFacebook,
  LiaInstagram,
  LiaLinkedin,
  LiaTwitter,
} from "react-icons/lia";

function Footer() {
  return (
    <footer className="h-full md:min-h-48">
      <div className="flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <IoIosFingerPrint className="text-zinc-500 text-5xl" />
          <span className="md:text-3xl lg:text-4xl text-2xl">FINSCORE</span>
        </div>
        <div className="flex gap-10">
          <LiaLinkedin className="cursor-pointer text-5xl" />
          <LiaInstagram className="cursor-pointer text-5xl" />
          <LiaFacebook className="cursor-pointer text-5xl" />
          <LiaTwitter className="cursor-pointer text-5xl" />
        </div>
      </div>
      <div className="text-center mt-20">
        <span>© 2024 - FinScore . All rights reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
