import { CircleCheckBig } from 'lucide-react';

import Link from "next/link"
export default function PaymentSuccesPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex flex-col items-center">
          <CircleCheckBig className="text-primario h-16 w-16 mb-4" />
          <h1 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">Pago Aprobado</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Muchas gracias por tu compra.</p>
          <Link
            className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-md transition-colors"
            href="#"
          >
            Volver a la Tienda
          </Link>
        </div>
      </div>
    </div>
  );
}



// function CircleCheckIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="12" cy="12" r="10" />
//       <path d="m9 12 2 2 4-4" />
//     </svg>
//   )
// }