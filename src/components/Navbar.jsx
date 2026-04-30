"use client";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="border-b px-2">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg">QurbaniHat</h3>
        </div>

        {/* Nav Links */}
        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href="/">Home</Link>
          </li>

          {/* FIXED */}
          <li>
            <Link href="/all-animals">All Animals</Link>
          </li>

          {/* Optional (extra section) */}
          <li>
            <Link href="/tips">Qurbani Tips</Link>
          </li>

          {/* FIXED */}
          <li>
            <Link href="/profile">Profile</Link>
          </li>
        </ul>

        {/* Auth Section */}
        <div className="flex gap-4 items-center">
          <ul className="flex items-center text-sm gap-3">
            
            {/* FIXED */}
            <li>
              <Link href="/register">SignUp</Link>
            </li>

            {/* FIXED */}
            <li>
              <Link href="/login">SignIn</Link>
            </li>
          </ul>

          {/* Avatar */}
          <Image
            src="/avatar.png"
            alt="user"
            width={35}
            height={35}
            className="rounded-full border cursor-pointer"
          />
        </div>

      </nav>
    </div>
  );
};

export default Navbar;