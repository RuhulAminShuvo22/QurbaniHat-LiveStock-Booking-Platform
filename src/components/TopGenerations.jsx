

const TopGenerations = async () => {

    const res = await fetch("https://qurbani-hat-live-stock-booking-plat.vercel.app/data.json")
    const animals = await res.json()
    //console.log(animals,"animals")

    return (
        <div>
            
        </div>
    );
};

export default TopGenerations;