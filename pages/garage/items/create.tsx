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
      <div>{toggle ? <Tools /> : <Vehicle />}</div>
    </div>
  );
}

export default Create;
