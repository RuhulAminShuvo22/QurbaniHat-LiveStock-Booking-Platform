import AnimalCard from "@/components/AnimalCard";

const AllAnimalsPage = async () => {

    const res = await fetch("http://localhost:3000/data.json");

    const animals = await res.json();

    //console.log(animals);
    //

    return (
        <div>
            <h1 className="text-2xl font-bold m-4">All Animals</h1>

            <div className="grid grid-cols-4 gap-5">
                {
                    animals.map(animal => <AnimalCard key={animal.id} animal={animal}></AnimalCard>)
                }
            </div>
        </div>
    );
};

export default AllAnimalsPage;

// "use client";

// import { useEffect, useState } from "react";
// import AnimalCard from "@/components/AnimalCard";

// const AllAnimalsPage = () => {
//     const [animals, setAnimals] = useState([]);
//     const [filteredAnimals, setFilteredAnimals] = useState([]);

//     const [type, setType] = useState("All");
//     const [priceRange, setPriceRange] = useState("All");

//     useEffect(() => {
//         fetch("http://localhost:3000/category.json")
//             .then(res => res.json())
//             .then(data => {
//                 setAnimals(data);
//                 setFilteredAnimals(data);
//             });
//     }, []);

//     // 🔥 Combined Filter
//     useEffect(() => {
//         let temp = [...animals];

//         // filter by type
//         if (type !== "All") {
//             temp = temp.filter(animal => animal.type === type);
//         }

//         // filter by price
//         if (priceRange !== "All") {
//             if (priceRange === "low") {
//                 temp = temp.filter(animal => animal.price <= 50000);
//             } else if (priceRange === "mid") {
//                 temp = temp.filter(animal => animal.price > 50000 && animal.price <= 150000);
//             } else if (priceRange === "high") {
//                 temp = temp.filter(animal => animal.price > 150000);
//             }
//         }

//         setFilteredAnimals(temp);

//     }, [type, priceRange, animals]);

//     return (
//         <div>
//             <h1 className="text-2xl font-bold m-4">All Animals</h1>

//             {/* 🔽 Filter Section */}
//             <div className="flex gap-4 m-4">

//                 {/* Type Dropdown */}
//                 <select
//                     value={type}
//                     onChange={(e) => setType(e.target.value)}
//                     className="border p-2 rounded"
//                 >
//                     <option value="All">All Types</option>
//                     <option value="Cow">Cow</option>
//                     <option value="Goat">Goat</option>
//                 </select>

//                 {/* Price Dropdown */}
//                 <select
//                     value={priceRange}
//                     onChange={(e) => setPriceRange(e.target.value)}
//                     className="border p-2 rounded"
//                 >
//                     <option value="All">All Prices</option>
//                     <option value="low">Below 50k</option>
//                     <option value="mid">50k - 150k</option>
//                     <option value="high">Above 150k</option>
//                 </select>

//             </div>

//             {/* 🐄 Animal List */}
//             <div className="grid grid-cols-4 gap-5">
//                 {
//                     filteredAnimals.map(animal => (
//                         <AnimalCard
//                             key={animal.id}
//                             animal={animal}
//                         />
//                     ))
//                 }
//             </div>
//         </div>
//     );
// };

// export default AllAnimalsPage;