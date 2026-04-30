import React from 'react';

const AnimalDetailsPage = async ({params}) => {

    const {id} = await params;
    //console.log(id, "id")

    const res = await fetch("https://qurbani-hat-live-stock-booking-plat.vercel.app/data.json");

    const animals = await res.json();
    //console.log("animals", animals)
    const animal = animals.find(p => p.id == id)
    //console.log(animal, "animal")

    return (
        <div>
            
            <h1>{animal ?.name}</h1>
            <p>{animal.breed}</p>
        </div>
    );
};

export default AnimalDetailsPage;