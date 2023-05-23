import Tools from '@/components/item/tools';
import Vehicle from '@/components/item/vehicle';
import React, { useState } from 'react';
import { FaPhotoVideo } from 'react-icons/fa';
function Create() {
  const [toggle, setToggle] = useState<boolean>(true);

  return (
    <div>
      <div className="flex justify-center">
        <button
          onClick={() => setToggle(false)}
          className={`border p-4 ${!toggle && 'bg-green-500'}`}
          title="Velg"
        >
          Verktøy
        </button>
        <button
          onClick={() => setToggle(true)}
          className={`border p-4 ${toggle && 'bg-green-500'}`}
          title="Velg"
        >
          Kjøretøy
        </button>
      </div>
      <div>{toggle ? <Tools /> : <Vehicle />}</div>
    </div>
  );
}
//   return (
//     <>
//       <form>
//         <div className="flex w-full justify-center space-y-12 mt-5">
//           <div className="border-b border-gray-900/10 pb-12">
//             <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//               <div className="sm:col-span-4">
//                 <label
//                   htmlFor="username"
//                   className="block text-sm font-medium leading-6 text-gray-900"
//                 >
//                   Navn
//                 </label>
//                 <div className="mt-2">
//                   <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
//                     <input
//                       type="text"
//                       name="username"
//                       id="username"
//                       autoComplete="username"
//                       className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
//                       placeholder="janesmith"
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="col-span-full">
//                 <label
//                   htmlFor="about"
//                   className="block text-sm font-medium leading-6 text-gray-900"
//                 >
//                   About
//                 </label>
//                 <div className="mt-2">
//                   <textarea
//                     id="about"
//                     name="about"
//                     rows={3}
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                     defaultValue={''}
//                   />
//                 </div>
//                 <p className="mt-3 text-sm leading-6 text-gray-600">
//                   Write a few sentences about yourself.
//                 </p>
//               </div>

//               <div className="col-span-full">
//                 <label
//                   htmlFor="cover-photo"
//                   className="block text-sm font-medium leading-6 text-gray-900"
//                 >
//                   Cover photo
//                 </label>
//                 <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
//                   <div className="text-center">
//                     <FaPhotoVideo
//                       className="mx-auto h-12 w-12 text-gray-300"
//                       aria-hidden="true"
//                     />
//                     <div className="mt-4 flex text-sm leading-6 text-gray-600">
//                       <label
//                         htmlFor="file-upload"
//                         className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
//                       >
//                         <span>Upload a file</span>
//                         <input
//                           id="file-upload"
//                           name="file-upload"
//                           type="file"
//                           className="sr-only"
//                         />
//                       </label>
//                       <p className="pl-1">or drag and drop</p>
//                     </div>
//                     <p className="text-xs leading-5 text-gray-600">
//                       PNG, JPG, GIF up to 10MB
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <button className="bg-green-500 rounded-lg p-3 w-20 ">
//                   Post
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </form>
//     </>
//   );
// }

export default Create;
