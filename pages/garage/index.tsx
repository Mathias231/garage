import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';
import GetGarageWithItems from '@/lib/getGarageWithItems';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Garage() {
  const { data: session } = useSession();
  const router = useRouter();

  // If user is not whiteListed, send back to startpage
  useEffect(() => {
    if (!session?.user.whiteListed) router.push('/');
  });

  const { garage, isLoading, mutate } = GetGarageWithItems();

  if (!garage) return <div>No items found</div>;

  const handleClick = async (itemId: string) => {
    await axios
      .delete(`/api/item/${itemId}`)
      .then((msg) => {
        mutate();
        toast.success('Gjenstand Slettet!', {
          position: 'top-center',
        });
      })
      .catch((err) => {
        toast.warn(err, {
          position: 'top-center',
        });
      });
  };

  return (
    <main>
      <div className="bg-teal-300 flex justify-center items-center">
        <div className="p-4">
          <h1 className="text-xl font-bold">{garage.name}</h1>
          {}
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <Link href="/garage/items/create" title="Legg til verktøy">
          <FaPlus size={40} className="hover:translate-y-1" />
        </Link>
      </div>
      <div>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {garage.items.map((item) => {
                return (
                  <a key={item.id} className="border rounded-md p-1 shadow-lg">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                      <Image
                        src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
                        alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                        width={1000}
                        height={1000}
                        priority
                      />
                    </div>
                    <h3 className="mt-1 text-lg font-medium text-gray-900 ">
                      {item.name}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">
                      Weight: {item.weight}kg
                    </p>
                    {item.id}
                    <p className="mt-4 text-sm text-gray-700">
                      Durability: {item.durability}%
                    </p>
                    {session?.user.userId === item.userId ? (
                      <div>
                        <button onClick={() => handleClick(item.id)}>
                          <FaTrash />
                        </button>
                      </div>
                    ) : (
                      ''
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
