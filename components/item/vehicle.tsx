import React, { ChangeEvent, useState } from 'react';

function Vehicle() {
  const [name, setName] = useState('');
  const [durability, setDurability] = useState(0);
  const [weight, setWeight] = useState('');
  const [image, setImage] = useState(null);
  const [buttonLoading, setButtonLoading] = useState(false);

  return (
    <div className="flex justify-center mt-24">
      <form
        className="w-96 bg-white shadow-md rounded px-8 pt-6 pb-8"
        // onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Tool Name"
            // value={name}
            required
            // onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Durability
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="durability"
            type="range"
            min={0}
            max={100}
            step={1}
            placeholder="Tool Durability"
            // value={durability}
            // onChange={(e) => setDurability(parseInt(e.target.value))}
          />
          {/* <div className="text-center mt-2">{durability}</div> */}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Weight
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="weight"
            type="number"
            placeholder="Tool Weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Image
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="image"
            type="file"
            accept="image/*"
            // onChange={handleImageChange}
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              buttonLoading && 'cursor-progress'
            } `}
            type="submit"
            // disabled={buttonLoading}
          >
            Upload
          </button>
        </div>
      </form>
    </div>
  );
}

export default Vehicle;
