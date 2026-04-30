// import React from 'react';

// const AnimalDetailsPage = async ({params}) => {

//     const {id} = await params;
//     //console.log(id, "id")

//     const res = await fetch("https://qurbani-hat-live-stock-booking-plat.vercel.app/data.json");

//     const animals = await res.json();
//     //console.log("animals", animals)
//     const animal = animals.find(p => p.id == id)
//     //console.log(animal, "animal")

//     return (
//         <div>
            
//             <h1>{animal ?.name}</h1>
//             <p>{animal.breed}</p>
//         </div>
//     );
// };

// export default AnimalDetailsPage;



import React from "react";
import Image from "next/image";

const AnimalDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    "https://qurbani-hat-live-stock-booking-plat.vercel.app/data.json"
  );

  const animals = await res.json();

  const animal = animals.find((p) => p.id == id);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10 items-center bg-white shadow-lg rounded-2xl p-6">
        
        {/* Image */}
        <div className="relative w-full h-[400px]">
          <Image
            src={animal?.image}
            alt={animal?.name}
            fill
            className="object-cover rounded-xl"
          />
        </div>

        {/* Details */}
        <div className="space-y-4">
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
            {animal?.category}
          </span>

          <h1 className="text-4xl font-bold">{animal?.name}</h1>

          <p className="text-gray-600 text-lg">{animal?.description}</p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="bg-gray-100 p-4 rounded-xl">
              <p className="text-sm text-gray-500">Type</p>
              <h3 className="font-semibold">{animal?.type}</h3>
            </div>

            <div className="bg-gray-100 p-4 rounded-xl">
              <p className="text-sm text-gray-500">Breed</p>
              <h3 className="font-semibold">{animal?.breed}</h3>
            </div>

            <div className="bg-gray-100 p-4 rounded-xl">
              <p className="text-sm text-gray-500">Weight</p>
              <h3 className="font-semibold">{animal?.weight} KG</h3>
            </div>

            <div className="bg-gray-100 p-4 rounded-xl">
              <p className="text-sm text-gray-500">Age</p>
              <h3 className="font-semibold">{animal?.age} Years</h3>
            </div>

            <div className="bg-gray-100 p-4 rounded-xl">
              <p className="text-sm text-gray-500">Location</p>
              <h3 className="font-semibold">{animal?.location}</h3>
            </div>

            <div className="bg-gray-100 p-4 rounded-xl">
              <p className="text-sm text-gray-500">Price</p>
              <h3 className="font-semibold text-green-600">
                ৳ {animal?.price}
              </h3>
            </div>
          </div>

          <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetailsPage;