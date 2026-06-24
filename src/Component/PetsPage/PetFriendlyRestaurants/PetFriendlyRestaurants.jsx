import React from 'react';
import { Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';

const PetFriendlyRestaurantsComp = () => {
    const restaurants = [
        {
            name: "Mac's Seafood",
            address: "Shank Painter Road",
            url: "#"
        },
        {
            name: "Bubula's By the Sea",
            address: "Commercial Street",
            url: "#"
        },
        {
            name: "Local 186 Burger",
            address: "Commercial Street",
            url: "#"
        },
        {
            name: "Big Daddy Burritos",
            address: "Aquarium Market Place, Commercial Street",
            note: "Treat your dog to a Pawrito",
            url: "#"
        },
        {
            name: "Street Eats",
            address: "Aquarium Market",
            note: "offers a pet menu Doggie Bites",
            url: "#"
        },
        {
            name: "Aqua Bar",
            address: "Aquarium Market",
            note: "offers a pet menu Doggie Bites",
            url: "#"
        },
        {
            name: "The Canteen",
            url: "#"
        },
        {
            name: "Crown & Anchor",
            url: "#"
        },
        {
            name: "Governor Bradford",
            url: "#"
        },
        {
            name: "Mezzeterranean",
            url: "#"
        },
        {
            name: "Patio",
            url: "#"
        },
        {
            name: "Post Office Café",
            url: "#"
        },
        {
            name: "Provincetown Brewing Company",
            url: "#"
        },
        {
            name: "Tin Pan Alley",
            url: "#"
        },
        {
            name: "Yolqueria",
            url: "#"
        }
    ];

    return (
        <section className="w-full bg-white py-8 md:py-12 overflow-hidden">
            <div className="max-w-[1300px] mx-auto px-6 flex flex-col justify-center items-center">

                {/* Heading */}
                <h2 className="text-[#2D5D80] font-helvetica text-[32px] md:text-[40px] font-normal mb-8 tracking-wide leading-tight w-full text-center ">
                    Pet Friendly Restaurants
                </h2>

                {/* Grid Layout of Restaurant Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full font-helvetica">
                    {restaurants.map((restaurant, idx) => (
                        <div
                            key={idx}
                            className="flex items-start gap-4 bg-gray-50 border border-gray-100 p-5 rounded-sm shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:bg-gray-100/50 transition-all duration-200"
                        >
                            {/* Fork & Knife Icon (Utensils) */}
                            <span className="mt-1 flex-shrink-0 text-[#df9b29] p-2 bg-[#df9b29]/5 rounded-sm">
                                <Utensils size={18} strokeWidth={2} />
                            </span>

                            {/* Restaurant Info */}
                            <div className="text-[14px] md:text-[15px] text-gray-800 leading-relaxed font-normal">
                                {restaurant.url ? (
                                    <Link to={restaurant.url}
                                        // target="_blank"
                                        // rel="noopener noreferrer"
                                        className="font-bold text-[#2D5D80] hover:text-[#df9b29] underline decoration-[#df9b29]/40 hover:decoration-[#df9b29] decoration-2 underline-offset-4 transition-all duration-200"
                                    >
                                        {restaurant.name}

                                    </Link>
                                ) : (
                                    <span className="font-bold text-gray-900">{restaurant.name}</span>
                                )}

                                {restaurant.address && (
                                    <span className="text-gray-600"> - {restaurant.address}</span>
                                )}

                                {restaurant.note && (
                                    <span className="text-gray-500 italic block mt-1 text-[13px]">
                                        ({restaurant.note})
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default PetFriendlyRestaurantsComp;
