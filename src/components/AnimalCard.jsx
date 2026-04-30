import { Card, Separator } from "@heroui/react";
import Image from "next/image";
import { FaWeightScale } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";


const AnimalCard = ({ animal }) => {
    console.log(animal, "animal")


    return (
        <Card className="border rounded-xl">
            <div className="relative w-full aspect-square">
                <Image
                    className="object-cover rounded-xl"
                    src={animal.image}
                    // height={200}
                    // width={200}
                    fill
                    sizes="(mx-width:768px) 100vw, (max-width: 1200px) 50vw, 33vw "
                    alt={animal.name}
                >

                </Image>
            </div>

            <div>
                <div>
                    <h2 className="font-medium">{animal.name}</h2>
                </div>

                <div className="flex gap-15 font-medium">
                    <div className="flex items-center gap-2">
                        <p><FaWeightScale /></p>
                        <p>{animal.weight}</p>
                    </div>
                    

                    <div className="flex items-center gap-2">
                        <p><IoLocation /></p>
                        <p>{animal.location}</p>
                    </div>
                </div>

            </div>


        </Card>
    );
};

export default AnimalCard;