import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="">
      <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center py-4">
        <div aria-hidden="true" />

        {/* Logo + Title + Date - Center */}
        <div className="flex items-center gap-2 text-center">
          <Image
            className="h-10 w-10"
            src="/logo.webp"
            alt="Logo"
            width={40}
            height={40}
          />

          <div>
            <Link href="/" className="text-xl font-bold text-red-700">
              Bangla News 24
            </Link>

            <p className="text-sm text-gray-600">{date}</p>
          </div>
        </div>

        {/* Buttons - Right */}
        <div className="flex items-center justify-self-end gap-2">
          <button
            type="button"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-red-700"
          >
            সাইন ইন
          </button>

          <button
            type="button"
            className="rounded-md bg-red-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-800"
          >
            সাইন আপ
          </button>
        </div>
      </div>

      <NavLinks />
    </header>
  );
};

export default Header;

