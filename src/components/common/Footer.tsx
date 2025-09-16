// 'use client';

// export default function Footer() {
//   return (
//     <footer className="bg-[#F5F4F4] mt-12">
//       {/* Main Grid */}
//       <div className="max-w-[clamp(320px,90%,2000px)] mx-auto px-4 py-12 grid   grid-cols-3 md:grid-cols-5  gap-4">
//         {/* Account */}
//         <div>
//           <h4 className="font-semibold  text-gray-900 mb-3 text-[clamp(1rem,2vw,1rem)]">Account</h4>
//           <ul className="space-y-2 text-[clamp(0.875rem,1.2vw,0.875rem)] text-[#737373]">
//             <li><a href="#">Log In</a></li>
//             <li><a href="#">Sign Up</a></li>
//             <li><a href="#">Redeem a Gift Card</a></li>
//           </ul>
//         </div>

//         {/* Company */}
//         <div>
//           <h4 className="font-semibold mb-3 text-[clamp(1rem,2vw,1rem)]  text-gray-900">Company</h4>
//           <ul className="space-y-2 text-[#737373] text-[clamp(0.875rem,1.2vw,0.875rem)]">
//             <li><a href="#">About</a></li>
//             <li><a href="#">Factories</a></li>
//             <li><a href="#">Careers</a></li>
//             <li><a href="#">DEI</a></li>
//             <li><a href="#">Environmental Initiatives</a></li>
//             <li><a href="#">International</a></li>
//             <li><a href="#">Accessibility</a></li>
//           </ul>
//         </div>

//         {/* Get Help */}
//         <div>
//           <h4 className="font-semibold mb-3   text-gray-900 text-[clamp(1rem,2vw,1rem)]">Get Help</h4>
//           <ul className="space-y-2  text-[#737373] text-[clamp(0.875rem,1.2vw,0.875rem)]">
//             <li><a href="#">Help Center</a></li>
//             <li><a href="#">Bulk Orders</a></li>
//             <li><a href="#">Shipping Info</a></li>
//             <li><a href="#">Return Policy</a></li>
//           </ul>
//         </div>

//         {/* Connect + Email Form */}
//         <div className=" col-span-2 flex flex-row items-start justify-between gap-12 lg:gap-28 mt-6 md:mt-0 w-full
//  ">
//           {/* Connect Section */}
//           <div>
//             <h4 className="font-semibold mb-3   text-gray-900 text-[clamp(1rem,2vw,1rem)]">Connect</h4>
//             <ul className="space-y-2  text-[#737373] text-[clamp(0.875rem,1.2vw,0.875rem)]">
//               <li><a href="#">Facebook</a></li>
//               <li><a href="#">Instagram</a></li>
//               <li><a href="#">Twitter</a></li>
//               <li><a href="#">Our Stores</a></li>
//             </ul>
//           </div>

//           {/* Email Form beside Connect */}
//           <div className="flex flex-row mt-0 w-full   ">
//             <input
//               type="email"
//               placeholder="Email Address"
//               className="px-2 py-2 border border-gray-300  focus:outline-none w-[130px] sm:w-full text-[clamp(0.875rem,1.2vw,1rem)]"
//             />
//             <button className="bg-black text-white px-4 py-2  text-[clamp(0.75rem,1vw,1rem)]">
//               →
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="flex flex-wrap justify-center gap-2 md:gap-6 text-center text-[clamp(0.5rem,1vw,1rem)] text-gray-500">
//   <span>Privacy Policy</span>
//   <span>Terms of Service</span>
//   <span>Do Not Sell or Share My Personal Information</span>
//   <span>CS Supply Chain Transparency</span>
//   <span>Vendor Code of Conduct</span>
//   <span>Sitemap Pages</span>
//   <span>Sitemap Products</span>
// </div>

//       <div className=" border-gray-300 py-4 text-center text-[clamp(0.75rem,1vw,0.875rem)] text-gray-500">
//         © {new Date().getFullYear()} Everlane. All rights reserved.
//       </div>
//     </footer>
//   );
// }



'use client';

export default function Footer() {
  return (
    <footer className="bg-[#F5F4F4] mt-6 md:mt-12 ">
      <div className="max-w-[clamp(200px,89%,2000px)] mx-auto px-0 lg:px-2 pt-6 md:pt-14 pb-2 md:pb-6 grid grid-cols-1 md:grid-cols-10 gap-2 md:gap-4 ">
        {/* Left Grid (4 sections) */}  
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 col-span-1 md:col-span-6 text-center justify-center md:text-left">
          {/* Account */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3 text-[clamp(0.75rem,2vw,0.9rem)]">Account</h4>
            <ul className="space-y-2 text-[clamp(0.65rem,1.2vw,0.875rem)] text-[#737373]">
              <li><a href="#">Log In</a></li>
              <li><a href="#">Sign Up</a></li>
              <li><a href="#">Redeem a Gift Card</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-3 text-[clamp(0.75rem,2vw,0.9rem)] text-gray-900">Company</h4>
            <ul className="space-y-2 text-[#737373] text-[clamp(0.65rem,1.2vw,0.875rem)]">
              <li><a href="#">About</a></li>
              <li><a href="#">Factories</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">DEI</a></li>
              <li><a href="#">Environmental Initiatives</a></li>
              <li><a href="#">International</a></li>
              <li><a href="#">Accessibility</a></li>
            </ul>
          </div>

          {/* Get Help */}
          <div>
            <h4 className="font-semibold mb-3 text-gray-900 text-[clamp(0.75rem,2vw,0.9rem)]">Get Help</h4>
            <ul className="space-y-2 text-[#737373] text-[clamp(0.65rem,1.2vw,0.875rem)]">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Bulk Orders</a></li>
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Return Policy</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-3 text-gray-900 text-[clamp(0.75rem,2vw,0.9rem)]">Connect</h4>
            <ul className="space-y-2 text-[#737373] text-[clamp(0.65rem,1.2vw,0.875rem)]">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Our Stores</a></li>
            </ul>
          </div>
        </div>

        {/* Right Side (Email Form) */}
        <div className="col-span-1 md:col-span-4 flex flex-col justify-start items-center mt-4 md:mt-0">
          
          <div className="flex w-[clamp(16rem,5vw,20rem)] sm:w-[clamp(20rem,9vw,24rem)] md:w-[300px] lg:w-[400px] ">
            <input
              type="email"
              placeholder="Email Address"
              className=" px-1 py-1 md:px-3 md:py-3 border border-gray-300 focus:outline-none flex-grow text-[clamp(0.75rem,1.2vw,0.875rem)]"
            />
            <button className="bg-black text-white px-4 py-2 text-[clamp(0.75rem,1vw,1rem)]">
              →
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom Links */}
      <div className=" flex flex-wrap justify-center gap-2 md:gap-4 text-center text-[clamp(0.5rem,1vw,1rem)] text-gray-500 mt-2 overflow-hidden">
        <div className="flex justify-center gap-2 sm:gap-4 w-full sm:w-auto">
        <span>Privacy Policy</span>
        <span>Terms of Service</span>
        <span>Do Not Sell or Share My Personal Information</span></div>
        <div className="flex justify-center gap-2 sm:gap-4 w-full sm:w-auto">
        <span>CS Supply Chain Transparency</span>
        <span>Vendor Code of Conduct</span>
        <span>Sitemap Pages</span>
        <span>Sitemap Products</span>
        </div>
      </div>

      {/* Footer Bottom Copyright */}
      <div className="border-gray-300 py-2 text-center text-[clamp(0.75rem,1vw,0.875rem)] text-gray-500">
        © {new Date().getFullYear()} Everlane. All rights reserved.
      </div>
    </footer>
  );
}
