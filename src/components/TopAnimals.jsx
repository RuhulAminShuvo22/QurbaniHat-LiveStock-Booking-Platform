// import AnimalCard from "./AnimalCard";


// const TopAnimals = async () => {

//     const res = await fetch("http://localhost:3000/data.json")
//     const animals = await res.json()
//     //console.log(animals,"animals")
//     const topAnimals = animals.slice(0, 8);
//     console.log(topAnimals, "topAnimals")

//     return (
//         <div className="text-2xl font-bold my-5">
//             <h1>Top Animals</h1>

//             <div className="grid grid-cols-4 gap-5">
//                 {
//                     topAnimals.map(animal => <AnimalCard key={animal.id} animal={animal}>
//                         {animal.name}

//                     </AnimalCard>)
//                 }
//             </div>


//         </div>
//     );
// };

// export default TopAnimals;

import AnimalCard from "./AnimalCard";
// সরাসরি json ফাইলটি ইমপোর্ট করুন (পাথ ঠিক করে নিন, সাধারণত public ফোল্ডারে থাকলে এমন হবে)
import animalsData from "../../public/data.json"; 

const TopAnimals = () => {
    // এখানে ফেচ (fetch) করার আর প্রয়োজন নেই, সরাসরি ডাটা ব্যবহার করুন
    const animals = animalsData;
    const topAnimals = animals.slice(0, 8);

    return (
        <div className="text-2xl font-bold my-5">
            <h1>Top Animals</h1>
            <div className="grid grid-cols-4 gap-5">
                {
                    topAnimals.map(animal => (
                        <AnimalCard key={animal.id} animal={animal}>
                            {animal.name}
                        </AnimalCard>
                    ))
                }
            </div>
        </div>
    );
};

export default TopAnimals;


