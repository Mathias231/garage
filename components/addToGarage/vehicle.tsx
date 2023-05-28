import { addToGarageProps } from '@/types/garage.types';
import axios from 'axios';
import React, { ChangeEvent, useState } from 'react';
import { toast } from 'react-toastify';

function AddVehicle({ garageId, userId }: addToGarageProps) {
  const [vehicleName, setVehicleName] = useState('');
  const [color, setColor] = useState('red');
  const [distanceDriven, setDistanceDriven] = useState(0);
  const [model, setModel] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [buttonLoading, setButtonLoading] = useState(false);

  // Adding file to Image State
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;

    if (!file)
      return toast.warn('Something Went Wrong with Image', {
        position: 'top-center',
      });
    // Sets file
    setImage(file);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!image)
      return toast.warn('Mangler bilde', {
        position: 'top-center',
      });

    setButtonLoading(true);

    // // Sending image Path, Name and ID to db and returns imageId
    const formData = new FormData();
    formData.append('image', image);

    const uploadImage = await axios.post('/api/image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    // Returns imageId
    const { imageId } = uploadImage.data;
    console.log(imageId);

    // Uploading Tool to db
    const createVehicle = await axios
      .post('/api/vehicle/', {
        userId: userId,
        garageId: garageId,
        imageId: imageId,
        category: 'vehicle',
        name: vehicleName,
        color: color,
        model: model,
        distanceDriven: distanceDriven,
      })
      .catch((err) => {
        toast.warn(err, {
          position: 'top-center',
        });
      });

    // Reset the form fields
    setVehicleName('');
    setColor('');
    setDistanceDriven(0);
    setModel('');
    setImage(null);
    setButtonLoading(false);

    // Success
    toast.success('Verktøy er blitt lagt til!', {
      position: 'top-center',
    });
    return;
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
            placeholder="Kjøretøy Navn"
            value={vehicleName}
            required
            onChange={(e) => setVehicleName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Farge
          </label>
          <select
            className="w-full border h-11 shadow-lg rounded-lg"
            defaultValue={'red'}
            onChange={(e) => setColor(e.target.value)}
          >
            <option value={'red'}>Rød</option>
            <option value={'blue'}>Blå</option>
            <option value={'green'}>Grønn</option>
            <option value={'black'}>Svart</option>
            <option value={'gray'}>Grå</option>
            <option value={'yellow'}>Gul</option>
            <option value={'purple'}>Lilla</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Modell
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="model"
            type="text"
            placeholder="Kjøretøy Modell"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Avstand Kjørt
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="distanceDriven"
            type="number"
            placeholder="Kjørt Avstand"
            value={distanceDriven}
            onChange={(e) => setDistanceDriven(parseInt(e.target.value))}
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

export default AddVehicle;
