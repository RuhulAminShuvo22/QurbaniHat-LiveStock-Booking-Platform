// import AnimalCard from "@/components/AnimalCard";

// const AllAnimalsPage = async () => {

//     const res = await fetch("http://localhost:3000/data.json");

//     const animals = await res.json();

//     //console.log(animals);
//     //

//     return (
//         <div>
//             <h1 className="text-2xl font-bold m-4">All Animals</h1>

//             <div className="grid grid-cols-4 gap-5">
//                 {
//                     animals.map(animal => <AnimalCard key={animal.id} animal={animal}></AnimalCard>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default AllAnimalsPage;


"use client";

import { useEffect, useState } from "react";
import AnimalCard from "@/components/AnimalCard";

const AllAnimalsPage = () => {
  // 🔥 state
  const [animals, setAnimals] = useState([]);
  const [filteredAnimals, setFilteredAnimals] = useState([]);

  const [type, setType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sort, setSort] = useState("");

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // ✅ fetch data
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      setAnimals(data);
      setFilteredAnimals(data);
    };

    loadData();
  }, []);

  // ✅ debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  // ✅ filter + sort
  useEffect(() => {
    let result = [...animals];

    // 🔍 search
    if (debouncedSearch) {
      result = result.filter((animal) =>
        animal.name.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
    }

    // 🐄 type
    if (type) {
      result = result.filter((animal) => animal.type === type);
    }

    // 💰 min price
    if (minPrice) {
      result = result.filter(
        (animal) => animal.price >= Number(minPrice)
      );
    }

    // 💰 max price
    if (maxPrice) {
      result = result.filter(
        (animal) => animal.price <= Number(maxPrice)
      );
    }

    // 🔃 sorting
    if (sort === "low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    setFilteredAnimals(result);
  }, [animals, type, minPrice, maxPrice, sort, debouncedSearch]);
  

  return (
    <div>
      <h1 className="text-2xl font-bold m-4">All Animals</h1>

      {/* 🔥 FILTER BAR */}
      <div className="flex flex-wrap gap-4 m-4">

        {/* 🔍 Search */}
        <input
          type="text"
          placeholder="Search animal..."
          className="border p-2 rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* 🐄 Type */}
        <select
          className="border p-2 rounded"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">All Types</option>
          <option value="Cow">Cow</option>
          <option value="Goat">Goat</option>
        </select>

        {/* 💰 Min Price */}
        <input
          type="number"
          placeholder="Min Price"
          className="border p-2 rounded"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />

        {/* 💰 Max Price */}
        <input
          type="number"
          placeholder="Max Price"
          className="border p-2 rounded"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />

        {/* 🔃 Sort */}
        <select
          className="border p-2 rounded"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort</option>
          <option value="low">Price: Low → High</option>
          <option value="high">Price: High → Low</option>
        </select>

        {/* ❌ Reset Button */}
        <button
          onClick={() => {
            setType("");
            setMinPrice("");
            setMaxPrice("");
            setSort("");
            setSearch("");
          }}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Reset
        </button>

      </div>

      {/* 🐄 LIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-4">
        {filteredAnimals.length > 0 ? (
          filteredAnimals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))
        ) : (
          <p className="text-red-500">No animals found 😢</p>
        )}
      </div>
    </div>
  );
};

export default AllAnimalsPage;