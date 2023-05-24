import GetGarageItems from '@/lib/getGarageItems';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';

export default function Garage() {
  const { data: session } = useSession();
  const router = useRouter();

  // If user is not whiteListed, send back to startpage
  useEffect(() => {
    if (!session?.user.whiteListed) router.push('/');
  });

  // Mathias's garage ID
  const DB_ID = '646c92b21f1d71f34789ba38';

  // Fetching items in garage
  const { garage, isLoading, mutate } = GetGarageItems(
    typeof DB_ID === 'string' ? DB_ID : '1',
  );

  if (!garage) return <div>No items found</div>;

  return (
    <main>
      <div className="bg-teal-300 flex justify-center items-center">
        <div className="p-4">
          <h1 className="text-xl font-bold">{garage.name}</h1>
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
              {garage.items.map((item, i) => {
                return (
                  <a key={i} className="border">
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
                      Earthen Bottle
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">
                      Weight: {item.weight}kg
                    </p>
                    <p className="mt-4 text-sm text-gray-700">
                      Durability: {item.durability}%
                    </p>
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
