import React from 'react';
import { Plus, ArrowRightCircle } from 'lucide-react';

// Import images from assets/P-Town/thingToDo
import img1 from '../../../assets/P-Town/thingToDo/t1.jpg';
import img2 from '../../../assets/P-Town/thingToDo/t2.jpg';
import img3 from '../../../assets/P-Town/thingToDo/t3.jpg';
import img4 from '../../../assets/P-Town/thingToDo/t4.jpg';
import img5 from '../../../assets/P-Town/thingToDo/t5.jpg';
import img6 from '../../../assets/P-Town/thingToDo/t6.jpg';
import img7 from '../../../assets/P-Town/thingToDo/t7.jpg';
import img8 from '../../../assets/P-Town/thingToDo/t8.jpg';
import img9 from '../../../assets/P-Town/thingToDo/t9.jpg';
import img10 from '../../../assets/P-Town/thingToDo/t10.jpg';
import img11 from '../../../assets/P-Town/thingToDo/t11.jpg';
import img12 from '../../../assets/P-Town/thingToDo/t12.jpg';
import img13 from '../../../assets/P-Town/thingToDo/t13.jpg';
import img14 from '../../../assets/P-Town/thingToDo/t14.jpg';
// import img15 from '../../../assets/P-Town/thingToDo/img15.jpg';
// import img16 from '../../../assets/P-Town/thingToDo/img16.jpg';
// import img17 from '../../../assets/P-Town/thingToDo/img17.jpg';

const ThinkToDoCard = ({ item }) => {
    return (
        <div className="relative group overflow-hidden w-full h-[450px] md:h-[500px] cursor-pointer bg-black rounded-sm shadow-[0_4px_15px_rgba(0,0,0,0.05)]">

            {/* Background Image with the smooth zoom & slight blur effect */}
            <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-[1000ms] ease-out group-hover:scale-110 group-hover:blur-sm"
            />

            {/* Default Overlay: Bottom gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent opacity-100 transition-opacity duration-500 group-hover:opacity-0" />

            {/* Hover Overlay: Solid dark slate/blue mimicking the LocalExperiences card */}
            <div className="absolute inset-0 bg-[#1d2b38]/95 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Content Container */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end h-full">

                {/* Animated Text Wrapper */}
                <div className="relative transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out z-10">

                    <h3 className="text-white text-[20px] md:text-[24px] font-helvetica font-normal leading-snug pr-10 mb-4">
                        {item.title}
                    </h3>

                    {/* Expandable Description & Link */}
                    <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                        <div className="overflow-hidden">
                            <p className="text-gray-300 font-helvetica font-light text-[13px] md:text-[14px] leading-relaxed mb-6 pr-4">
                                {item.description}
                            </p>

                            {/* <a href={item.link} className="flex items-center text-[#df9b29] hover:text-[#c48824] transition-colors duration-300 w-fit">
                                <span className="uppercase tracking-[0.15em] text-[12px] font-bold font-['lora'] mr-3">
                                    LEARN MORE
                                </span>
                                <ArrowRightCircle size={16} strokeWidth={1.5} />
                            </a> */}
                        </div>
                    </div>
                </div>

                {/* Default State "+" Button */}
                {/* <div className="absolute bottom-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#17202A] opacity-100 transition-opacity duration-300 group-hover:opacity-0 shadow-lg z-20">
                    <Plus size={20} strokeWidth={1.5} />
                </div> */}

            </div>
        </div>
    );
};

const ThinkToDo = () => {
    const activities = [
        {
            id: 1,
            image: img1,
            title: "Provincetown Nature Trails",
            description: "Be sure to save a day or two for a hike through Shank Painter Pond, Clapps Pond (2.6 mile loop), Nicky's Park, and the Old Colony Nature Pathway (2.8+ miles). Find more info under our coffee table!",
            link: "#"
        },
        {
            id: 2,
            image: img2,
            title: "Provincetown Breakwater",
            description: "A lazy day in Ptown can be spent hiking across the Breakwater to Woods End or Long Point Lighthouses. Experience pristine sandy land and sweeping views back towards the Lower Cape.",
            link: "#"
        },
        {
            id: 3,
            image: img3,
            title: "Trolley Sightseeing",
            description: "Hop on the infamous Mayflower Trolley or build your own tour of the National Seashore and Light Houses. All tours begin in front of the Provincetown Town Hall.",
            link: "#"
        },
        {
            id: 4,
            image: img4,
            title: "Whale Watch",
            description: "A uniquely fun and educational experience linking learning with adventure in a protected national marine environment just off the coast of Cape Cod Bay.",
            link: "#"
        },
        {
            id: 5,
            image: img5,
            title: "Art's Dune Tours",
            description: "The best way to see the dunes and famous dune shacks where Eugene O’Neill was inspired. The sunset tour is particularly memorable—don’t forget your camera!",
            link: "#"
        },
        {
            id: 6,
            image: img6,
            title: "RacePoint Beach",
            description: "Right on the Atlantic Ocean with beautiful open waters. On a clear day, observe seals and whales frolicking in their natural habitat.",
            link: "#"
        },
        {
            id: 7,
            image: img7,
            title: "Herring Cove",
            description: "Provincetown is known for its beaches, and Herring Cove is a favorite. Note: One section is clothing optional. Enjoy a perfect beach day here!",
            link: "#"
        }
        ,
        {
            id: 8,
            image: img8,
            title: "Bike Trails",
            description: "The Province Lands loop is 5¼ miles of dunes and forest. As a Westville guest, you have full access to two (2) adult mountain bikes to explore!",
            link: "#"
        }
        ,
        {
            id: 9,
            image: img9,
            title: "Tin Pan Alley",
            description: "A restaurant and piano lounge where you can appreciate live music and al fresco dining on the beach under a skylit cathedral ceiling.",
            link: "#"
        }
        ,
        {
            id: 10,
            image: img10,
            title: "Crown & Anchor",
            description: "A massive entertainment complex with bars, a dance club (Paramount), and a deck perfect for people-watching in the center of town.",
            link: "#"
        }
        ,
        {
            id: 11,
            image: img11,
            title: "Post Office Cafe",
            description: "A 50-year landmark for American breakfast, festive bars, and nightly cabaret entertainment. A staple for both locals and tourists.",
            link: "#"
        }
        ,
        {
            id: 12,
            image: img12,
            title: "Atlantic House (A-House)",
            description: "The oldest gay bar in the USA and the only year-round dance club in PTown. Includes the Little Bar, Macho Bar, and the Big Room.",
            link: "#"
        }
        ,
        {
            id: 13,
            image: img13,
            title: "Joe's Coffee & Espresso Bar",
            description: "An artisanal approach to coffee. A true morning religious experience in the West End. Jumpstart your day with a fresh brew!",
            link: "#"
        }
        ,
        {
            id: 14,
            image: img14,
            title: "BoatSlip Resort",
            description: "Where the boys are! Hang out poolside during the day and come back for the world’s largest T-dance daily in the summer.",
            link: "#"
        },

    ];

    return (
        <section className="w-full py-20 md:py-24">
            <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 ">

                {/* Heading */}
                <h2 className="text-[#2D5D80] font-helvetica text-[28px] md:text-[36px] font-normal mb-4 leading-tight">
                    Things to Do in Provincetown
                </h2>

                {/* 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {activities.map((item) => (
                        <ThinkToDoCard key={item.id} item={item} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ThinkToDo;