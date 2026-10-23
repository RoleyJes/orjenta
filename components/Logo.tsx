import Image from "next/image";

import logo from "@/public/logo_light_full.png";

function Logo() {
  return (
    <div className="relative aspect-4/1 h-auto w-29.75">
      <Image src={logo} fill alt="logo" className="object-contain" />
    </div>
  );
}

export default Logo;
