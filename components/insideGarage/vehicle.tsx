import GetGarageWithItems from '@/lib/getGarageWithItems';
import { IVehicle } from '@/types/garage.types';
import axios from 'axios';
import { Session } from 'next-auth';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';

function VehicleList(vehicle: IVehicle) {
  const { data: session } = useSession();
  const { mutate } = GetGarageWithItems();

  const handleClick = async (vehicleId: string) => {
    await axios.delete(`/api/vehicle/${vehicleId}`).catch((err) => {
      toast.warn(err, {
        position: 'top-center',
      });
    });

    toast.success('Gjenstand Slettet!', {
      position: 'top-center',
    });
    return mutate();
  };

  return (
    <a key={vehicle.id} className="border rounded-md p-1 shadow-lg">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <Image
          src={`/api/image/${vehicle.image.internalName}`}
          alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
          className="h-full w-full object-cover object-center group-hover:opacity-75"
          width={1000}
          height={1000}
          priority
        />
      </div>
      <h3 className="mt-1 text-lg font-medium text-gray-900 ">
        {vehicle.name}
      </h3>
      <p className="mt-4 text-sm text-gray-700">Farge: {vehicle.color}kg</p>
      <p className="mt-4 text-sm text-gray-700">
        Lengde Kjørt: {vehicle.distanceDriven}
      </p>
      {session?.user.userId === vehicle.userId ? (
        <div>
          <button onClick={() => handleClick(vehicle.id)}>
            <FaTrash />
          </button>
        </div>
      ) : (
        ''
      )}
    </a>
  );
}

export default VehicleList;
