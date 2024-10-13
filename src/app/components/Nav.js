// components/Navbar.js
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="sticky top-0 left-0 z-50 w-full bg-gray-800 text-white md:px-8 py-4">
    <div className="w-full flex justify-between items-center md:px-8 py-2">
      <section className="flex space-x-4">
        <Link href="/">
          <div className="hover:underline">Home</div>
        </Link>
        <Link href="/about">
          <div className="hover:underline">About</div>
        </Link>
        <Link href="/services">
          <div className="hover:underline">Services</div>
        </Link>
        <Link href="/contact">
          <div className="hover:underline">Contact</div>
        </Link>
      </section>
    </div>
  </nav>
  );
}

export default Navbar;