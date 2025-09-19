


// "use client";
// import { useCart } from "../store/cartContext";
// import Image from "next/image";

// export default function CartDrawer() {
//   const { items, removeFromCart, isOpen, toggleCart, updateQuantity } = useCart();

//   // subtotal now uses discounted price
//   const subtotal = items.reduce(
//     (acc, item) => acc + (item.price * 0.7) * item.quantity,
//     0
//   );

//   return (
//     <>
//       {isOpen && (
//         <div className="fixed inset-0 bg-black/50 z-40" onClick={toggleCart}></div>
//       )}
//       <div
//         className={`fixed top-0 right-0 h-full w-full sm:w-[480px] bg-white z-50 transform transition-transform duration-300 ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         } flex flex-col`}
//       >
//         {/* Header */}
//         <div className="flex justify-between items-center p-4 border-b">
//           <h2 className="text-lg font-semibold">Your Cart</h2>
//           <button onClick={toggleCart} className="text-gray-500  hover:text-black">
//             X
//           </button>
//         </div>

//         {/* Cart items */}
//         <div className="flex-1 overflow-y-auto p-4 space-y-4">
//           {items.map((item, idx) => {
//             const discountedPrice = (item.price * 0.7).toFixed(2);
//             return (
//               <div
//                 key={`${item.id}-${item.selectedSize}-${item.selectedColor}-${idx}`}
//                 className="flex gap-3"
//               >
//                 <div className="w-16 h-16 relative">
//                   <Image
//                     src={item.image}
//                     alt={item.title}
//                     fill
//                     className="object-cover rounded"
//                   />
//                 </div>
//                 <div className="flex-1 flex justify-between">
//                   <div>
//                     <p className="text-sm font-medium">{item.title}</p>
//                     <p className="text-xs text-gray-500">
//                       {item.selectedSize} | {item.selectedColor}
//                     </p>

//                     {/* Discounted + original price */}
//                     <div className="flex items-center gap-2">
//                       <span className="text-sm font-semibold text-black">
//                         ${discountedPrice}
//                       </span>
//                       <span className="text-xs line-through text-gray-400">
//                         ${item.price.toFixed(2)}
//                       </span>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-2 mt-1">
//                     {/* Decrement */}
//                     <button
//                       className="px-2 py-1 border rounded text-gray-600 hover:bg-gray-200"
//                       onClick={() =>
//                         updateQuantity(
//                           item.id,
//                           item.selectedSize,
//                           item.selectedColor,
//                           item.quantity - 1
//                         )
//                       }
//                       disabled={item.quantity <= 1}
//                     >
//                       -
//                     </button>

//                     {/* Quantity */}
//                     <span className="px-2">{item.quantity}</span>

//                     {/* Increment */}
//                     <button
//                       className="px-2 py-1 border rounded text-gray-600 hover:bg-gray-200"
//                       onClick={() =>
//                         updateQuantity(
//                           item.id,
//                           item.selectedSize,
//                           item.selectedColor,
//                           item.quantity + 1
//                         )
//                       }
//                     >
//                       +
//                     </button>

//                     {/* Remove */}
//                     <button
//                       className="text-red-500 text-xs ml-2"
//                       onClick={() =>
//                         removeFromCart(item.id, item.selectedSize, item.selectedColor)
//                       }
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Subtotal & Checkout */}
//         <div className="p-4 border-t">
//           <div className="flex justify-between mb-4">
//             <span className="font-medium">Subtotal</span>
//             <span className="font-semibold">${subtotal.toFixed(2)}</span>
//           </div>
//           <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800">
//             Continue to Checkout
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }



"use client";
import { useCart } from "../store/cartContext";
import Image from "next/image";

export default function CartDrawer() {
  const { items, removeFromCart, isOpen, toggleCart, updateQuantity } = useCart();

  // ✅ subtotal uses discounted price
  const subtotal = items.reduce(
    (acc, item) => acc + (item.price * 0.7) * item.quantity,
    0
  );

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={toggleCart}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 h-full 
        w-full sm:w-[70%] lg:w-[480px] 
        bg-white z-50 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"} 
        flex flex-col`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button onClick={toggleCart} className="text-gray-500 hover:text-black">
            X
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.map((item, idx) => {
            const discountedPrice = (item.price * 0.7).toFixed(2);
            return (
              <div
                key={`${item.id}-${item.selectedSize}-${item.selectedColor}-${idx}`}
                className="flex gap-3 flex-wrap sm:flex-nowrap"
              >
                <div className="w-16 h-16 relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <div className="flex-1 flex justify-between flex-wrap sm:flex-nowrap">
                  <div>
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="text-xs text-gray-500">
                      {item.selectedSize} | {item.selectedColor}
                    </p>

                    {/* Discounted + original price */}
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-black">
                        ${discountedPrice}
                      </span>
                      <span className="text-xs line-through text-gray-400">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-2 sm:mt-1">
                    {/* Decrement */}
                    <button
                      className="px-2 py-1 border rounded text-gray-600 hover:bg-gray-200"
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.selectedSize,
                          item.selectedColor,
                          item.quantity - 1
                        )
                      }
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>

                    {/* Quantity */}
                    <span className="px-2">{item.quantity}</span>

                    {/* Increment */}
                    <button
                      className="px-2 py-1 border rounded text-gray-600 hover:bg-gray-200"
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.selectedSize,
                          item.selectedColor,
                          item.quantity + 1
                        )
                      }
                    >
                      +
                    </button>

                    {/* Remove */}
                    <button
                      className="text-red-500 text-xs ml-2"
                      onClick={() =>
                        removeFromCart(item.id, item.selectedSize, item.selectedColor)
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Subtotal & Checkout */}
        <div className="p-4 border-t">
          <div className="flex justify-between mb-4">
            <span className="font-medium">Subtotal</span>
            <span className="font-semibold">${subtotal.toFixed(2)}</span>
          </div>
          <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800">
            Continue to Checkout
          </button>
        </div>
      </div>
    </>
  );
}
