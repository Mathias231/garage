import AddTools from '@/components/addToGarage/tools';
import AddVehicle from '@/components/addToGarage/vehicle';

import GetGarageWithItems from '@/lib/getGarageWithItems';
import GarageId from '@/pages/api/garage/[garageId]';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

import { FaPhotoVideo } from 'react-icons/fa';
function Create() {
  const { data: session } = useSession();
  const { garage, isLoading, mutate } = GetGarageWithItems();
  const [toggle, setToggle] = useState<boolean>(true);

  const router = useRouter();

  // If user is not whiteListed, send back to startpage
  useEffect(() => {
    if (!session) router.push('/');
  });

  if (!session?.user.userId) return <div>Loading Session...</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!garage) return <div>No items found</div>;

  return (
    <div>
      <div className="flex justify-center">
        <button
          onClick={() => setToggle(true)}
          className={`border p-4 ${toggle && 'bg-green-500'}`}
          title="Velg"
        >
          Verktøy
        </button>
        <button
          onClick={() => setToggle(false)}
          className={`border p-4 ${!toggle && 'bg-green-500'}`}
          title="Velg"
        >
          Kjøretøy
        </button>
      </div>
      <div>
        {toggle ? (
          <AddTools garageId={garage.id} userId={session?.user.userId} />
        ) : (
          <AddVehicle garageId={garage.id} userId={session.user.userId} />
        )}
      </div>
    </div>
  );
}

export default Create;
