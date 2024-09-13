import React from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import Image from "next/image";

const Header = () => {
  return (
    <header className="h-[70px] bg-gray-200 flex justify-between items-center py-4 px-4">
      {/* Left side - Logo */}
      <Link href="/" passHref className="no-underline">
        <Image
          src="/logo.svg"
          height={100}
          width={200}
          alt="logo"
          className="w-[150px]"
        />
      </Link>

      {/* Right side - Navigation Links */}
      <div className="space-x-2">
        <Link href="/" passHref>
          <Button variant="contained">
            <span className="text-xs sm:text-sm">Latest</span>
          </Button>
        </Link>
        <Link href="/blogs?page=1" passHref>
          <Button variant="contained">
            <span className="text-xs sm:text-sm">Blogs</span>
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
