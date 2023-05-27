import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import GetGarageWithItems from '@/lib/getGarageWithItems';
import Item from '@/components/insideGarage/item';
import VehicleList from '@/components/insideGarage/vehicle';

export default function Garage() {
  const { data: session } = useSession();
  const router = useRouter();

  // If user is not whiteListed, send back to startpage
  useEffect(() => {
    if (!session?.user.whiteListed) router.push('/');
  });

  const { garage, isLoading, mutate } = GetGarageWithItems();
  if (isLoading) return <div>Loading...</div>;
  if (!garage) return <div>No items found</div>;

  return (
    <main>
      <div className="bg-teal-300 flex justify-center items-center">
        <div className="p-4">
          <h1 className="text-xl font-bold">{garage.name}</h1>
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <Link href="/garage/create/" title="Legg til verktøy">
          <FaPlus size={40} className="hover:translate-y-1" />
        </Link>
      </div>
      <div>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl space-y-20 lg:px-8">
            <div>
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {garage.items.map((item) => {
                  return (
                    <Item
                      key={item.id}
                      id={item.id}
                      userId={item.userId}
                      garageId={item.garageId}
                      name={item.name}
                      category={item.category}
                      durability={item.durability}
                      image={item.image}
                      weight={item.weight}
                    />
                  );
                })}
              </div>
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {garage.vehicle?.map((vehicle) => {
                  return (
                    <VehicleList
                      key={vehicle.id}
                      id={vehicle.id}
                      userId={vehicle.userId}
                      garageId={vehicle.garageId}
                      name={vehicle.name}
                      category={vehicle.category}
                      model={vehicle.model}
                      image={vehicle.image}
                      color={vehicle.color}
                      distanceDriven={vehicle.distanceDriven}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
