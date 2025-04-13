const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-10 bottom-0 w-full">
        <div className="max-w-7xl mx-auto px-2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-bold">nearMartX</h3>
              <p className="mt-2 text-gray-400">
                Your one-stop destination for the best shopping experience. Quality products, unbeatable prices.
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold">Quick Links</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="/" className="text-gray-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/products" className="text-gray-400 hover:text-white">
                    Products
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-400 hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Newsletter Subscription */}
            <div>
              <h3 className="text-lg font-bold">Subscribe to our Newsletter</h3>
              <p className="mt-2 text-gray-400">
                Stay updated with our latest offers and products.
              </p>
              <form className="mt-4 flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md text-white font-bold"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
  
          {/* Footer Bottom */}
          <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">&copy; 2024 nearMartX. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.675 0h-21.35C.602 0 0 .6 0 1.337v21.326C0 23.402.6 24 1.325 24h21.351C23.398 24 24 23.4 24 22.663V1.337C24 .602 23.4 0 22.675 0zM7.2 20H3.5v-9h3.7v9zM5.35 9.817c-1.152 0-1.9-.77-1.9-1.74 0-.982.769-1.741 1.938-1.741s1.9.759 1.9 1.74c0 .97-.749 1.741-1.9 1.741zm13.65 10.183h-3.7v-4.854c0-1.217-.417-2.047-1.459-2.047-.796 0-1.268.541-1.477 1.063-.076.185-.095.442-.095.7v5.138h-3.7s.048-8.365 0-9.219h3.7v1.307c.491-.758 1.368-1.837 3.333-1.837 2.433 0 4.262 1.59 4.262 5.011V20z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 4.557a9.853 9.853 0 01-2.828.775 4.932 4.932 0 002.165-2.725 9.865 9.865 0 01-3.127 1.195A4.918 4.918 0 0016.847 3c-2.728 0-4.941 2.215-4.941 4.941 0 .388.044.765.127 1.126C7.691 8.854 4.066 6.687 1.64 3.194a4.912 4.912 0 00-.666 2.482c0 1.708.87 3.215 2.19 4.099a4.907 4.907 0 01-2.24-.616c-.054 2.37 1.65 4.354 3.853 4.816a4.93 4.93 0 01-2.235.084c.63 1.962 2.444 3.393 4.6 3.433A9.868 9.868 0 010 19.54a13.892 13.892 0 007.548 2.209c9.053 0 14.002-7.498 14.002-13.986 0-.21-.005-.423-.015-.633A10.012 10.012 0 0024 4.557z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.23 0H1.77A1.77 1.77 0 000 1.77v20.46A1.77 1.77 0 001.77 24h20.46A1.77 1.77 0 0024 22.23V1.77A1.77 1.77 0 0022.23 0zM7.2 20H3.5V9h3.7v11zM5.35 7.817a2.168 2.168 0 110-4.336 2.168 2.168 0 010 4.336zm15.65 12.183h-3.7v-5.477c0-1.303-.466-2.195-1.623-2.195-.885 0-1.412.592-1.645 1.164-.085.207-.106.496-.106.785V20H9.8s.048-8.365 0-9.219h3.7v1.307c.495-.759 1.368-1.837 3.336-1.837 2.438 0 4.264 1.59 4.264 5.01V20z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  