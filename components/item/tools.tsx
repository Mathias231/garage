import axios from 'axios';
import React, { ChangeEvent, useState } from 'react';
import { toast } from 'react-toastify';
interface ToolsProps {
  garageId: string;
  userId: string;
}

function Tools({ garageId, userId }: ToolsProps) {
  const [name, setName] = useState('');
  const [durability, setDurability] = useState(0);
  const [weight, setWeight] = useState('');
  const [image, setImage] = useState(null);
  const [buttonLoading, setButtonLoading] = useState(false);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;

    console.log(file);
    // setImage(file);
  };

  console.log();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform any necessary actions with the form data (e.g., upload to a server)
    setButtonLoading(true);
    await axios
      .post('/api/item/', {
        userId: userId,
        garageId: garageId,
        category: 'tools',
        name: name,
        weight: weight,
        durability: durability,
      })
      .then((msg) => {
        toast.success('Verktøy er blitt lagt til!', {
          position: 'top-center',
        });
        setButtonLoading(false);
      })
      .catch((err) => {
        toast.warn(err, {
          position: 'top-center',
        });
      });

    // Reset the form fields
    setName('');
    setDurability(0);
    setWeight('');
    setImage(null);
  };

  return (
    <div className="flex justify-center mt-24">
      <form
        className="w-96 bg-white shadow-md rounded px-8 pt-6 pb-8"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Navn
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Verktøy Navn"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Varighet
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="durability"
            type="range"
            min={0}
            max={100}
            step={1}
            placeholder="Verktøy Varighet"
            value={durability}
            onChange={(e) => setDurability(parseInt(e.target.value))}
          />
          <div className="text-center mt-2">{durability}</div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Vekt (Kilo)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="weight"
            type="number"
            placeholder="Verktøy Vekt"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Bilde
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              buttonLoading && 'cursor-progress'
            } `}
            type="submit"
            disabled={buttonLoading}
          >
            Legg til
          </button>
        </div>
      </form>
    </div>
  );
}

export default Tools;
