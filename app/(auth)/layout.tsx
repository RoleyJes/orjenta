import Image from "next/image";
import authImage from "@/public/orjentaAuth.png";
// import authImage from "@/public/authImage.webp";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen w-full overflow-hidden md:grid-cols-2">
      {/* Image */}
      <div>
        <aside className="hidden p-7 md:fixed md:top-0 md:block md:h-screen md:w-1/2">
          {/* <div className="relative h-full overflow-hidden rounded-[20px]"> */}
          <Image
            src={authImage}
            alt="auth image"
            className="object-cover object-left"
            fill
            priority
          />
          {/* </div> */}
        </aside>
      </div>

      <main>{children}</main>
    </div>
  );
}
