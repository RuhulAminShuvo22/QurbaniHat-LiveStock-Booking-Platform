import AnimalCard from "./AnimalCard";


const TopGenerations = async () => {

    const res = await fetch("https://qurbani-hat-live-stock-booking-plat.vercel.app/data.json")
    const animals = await res.json()
    //console.log(animals,"animals")
    const topAnimals = animals.slice(0,8);
    console.log(topAnimals,"topAnimals")

    return (
        <div className="text-2xl font-bold mt-5">
            <h1>Top Animals</h1>

            <div className="grid grid-cols-4 gap-5">
                {
                    topAnimals.map(animal => <AnimalCard key={animal.id} animal={animal}>
                        {animal.name}

                    </AnimalCard>)
                }
            </div>


        </div>
    );
};

export default TopGenerations;