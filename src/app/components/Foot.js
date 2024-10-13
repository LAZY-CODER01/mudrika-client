import Link from "next/link";
function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <div className="hover:underline">Home</div>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <div className="hover:underline">About</div>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <div className="hover:underline">Services</div>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <div className="hover:underline">Contact</div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
            <div className="flex space-x-4">
              <Link href="#">
                <div className="hover:text-gray-400">Facebook</div>
              </Link>
              <Link href="#">
                <div className="hover:text-gray-400">Twitter</div>
              </Link>
              <Link href="#">
                <div className="hover:text-gray-400">Instagram</div>
              </Link>
              <Link href="#">
                <div className="hover:text-gray-400">LinkedIn</div>
              </Link>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p>&copy; 2023 My Next.js website</p>
          </div>
        </div>
      </div>
    </footer>
    );
  }
  
  export default Footer;