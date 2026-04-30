import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
    return (
        <div className="bg-[url('https://images.unsplash.com/photo-1500595046743-cd271d694d30')] h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">

            {/* Overlay */}
            <div className="w-full h-full rounded-lg bg-black/60 flex items-center">

                <div className="max-w-7xl mx-auto px-6 text-white">

                    <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
                        Find Your Perfect Qurbani Animal 🐄
                    </h1>

                    <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
                        Browse healthy cows and goats for Qurbani. সহজে বুক করুন আপনার পছন্দের পশু।
                    </p>

                    <div className="flex gap-4">

                        <Link href="/animals">
                            <Button className="bg-gradient-to-r from-green-500 via-lime-500 to-yellow-500 
                            text-black font-semibold px-6 py-2 rounded-full 
                            shadow-lg hover:shadow-2xl 
                            hover:scale-105 transition-all duration-300 
                            border-0">
                                🐄 Browse Animals
                            </Button>
                        </Link>

                        <Link href="/my-profile">
                            <Button
                                variant="outline"
                                className="text-white border-white px-6 py-2 rounded-full 
                                hover:bg-white hover:text-black 
                                transition-all duration-300 
                                hover:scale-105 shadow-md hover:shadow-xl">
                                👤 My Profile
                            </Button>
                        </Link>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;