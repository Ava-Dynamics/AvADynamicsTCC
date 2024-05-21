import { IoIosFingerPrint } from "react-icons/io"
import {
  LiaFacebook,
  LiaInstagram,
  LiaLinkedin,
  LiaTwitter,
} from "react-icons/lia"

function Footer() {
  return (
    <footer className="h-full md:h-[calc(100vh-50rem)] flex justify-between items-center">
      <div className="flex gap-5 items-center">
        <IoIosFingerPrint className="text-zinc-500 text-5xl" />
        <span className="md:text-3xl lg:text-4xl text-2xl">FINSCORE</span>
      </div>
      <div className="flex gap-10">
        <LiaLinkedin className="text-5xl" />
        <LiaInstagram className="text-5xl" />
        <LiaFacebook className="text-5xl" />
        <LiaTwitter className="text-5xl" />
      </div>
    </footer>
  )
}

export default Footer
