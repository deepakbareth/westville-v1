import React from 'react';
import { ArrowRightCircle } from 'lucide-react'; // Using Lucide for the arrow icon in the 2nd design

// Placeholder images - replace these with your actual image paths
import theatreImg from '../../../assets/P-Town/attractions/e1.jpg';
import monumentImg from '../../../assets/P-Town/attractions/e2.jpg';
import factory from '../../../assets/P-Town/attractions/factory2.jpg';
import sleep from '../../../assets/P-Town/attractions/sleep.jpg';
import vineyards from '../../../assets/P-Town/attractions/Vineyards.jpg';
import Paragraph from '../../ReusableComp/Paragraph';
// import monumentImg4 from '../../../assets/home/e5.jpg';

const NearbyAttractions = () => {

    // Data Array (Content from Image 1)
    const attractions = [
        {
            id: 1,
            image: theatreImg,
            title: "Provincetown Theatre",
            description: "Formed in 2001 in the birthplace of American theater, The Provincetown Theater Foundation encourages and promotes the performing arts on Outer Cape Cod through a year-round schedule of high-quality programming and educational space for artists.",
            link: "#"
        }
        ,
        {
            id: 2,
            image: monumentImg,
            title: "Provincetown Monument & Museum",
            description: "Standing at 252 feet, this is the tallest all-granite structure in the U.S. It commemorates the first landing of the Mayflower Pilgrims in 1620. Enjoy spectacular views of the entire Cape from the top of this historic landmark.",
            link: "#"
        }
        ,
        {
            id: 3,
            image: factory,
            title: "Cape Cod Potato Chip Factory",
            description: "A favorite area attraction since 1985! Take a tour of the factory to see how these world-famous chips are made. It's a perfect destination for family fun, especially on those occasional rainy Cape days.",
            link: "#"
        }
        ,
        {
            id: 4,
            image: sleep,
            title: "PAAM",
            description: "The Provincetown Art Association and Museum is a nationally recognized cultural institution dedicated to promoting the fine arts in America's oldest living art colony through exhibitions and education.",
            link: "#"
        }
        ,
        {
            id: 5,
            image: vineyards,
            title: "Truro Vineyards",
            description: "Rich in history and vision, this estate dates back to 1813. Once a farm painted by Edward Hopper, it now produces exceptional wines on warm, well-drained sandy soil. Visit for a guided tour of this special property.",
            link: "#"
        }
        // To add more, simply add another object here!
    ];

    return (
        <section className="w-full  py-20 md:py-24">
            <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 ">

                {/* Heading styled from the first image, but keeping it clean */}
                <h2 className="text-[#2D5D80] font-helvetica text-[28px] md:text-[36px] font-normal mb-4 leading-tight">
                    Nearby Attractions
                </h2>

                {/* Grid Layout mimicking Image 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                    {attractions.map((item) => (
                        <div key={item.id} className="flex flex-col group">

                            {/* Image Container */}
                            <div className="w-4/4 aspect-[3/3] mb-6 overflow-hidden bg-gray-100">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Title (Styling from Image 2: serif font, dark blue/slate color) */}
                            <h3 className="text-[#3b5998] font-helvetica text-[24px] md:text-[26px] font-normal mb-4 leading-tight">
                                {item.title}
                            </h3>

                            {/* Description (Styling from Image 2: lighter gray, sans-serif, clean leading) */}
                            <p className="text-gray-600 font-helvetica text-[14px] md:text-[15px] leading-relaxed mb-6 flex-grow">
                                {item.description}
                            </p>
                            {/* <Paragraph text={item.description} className="mb-10" /> */}

                            {/* Link (Styling from Image 2: Uppercase, arrow circle icon) */}
                            <a
                                href={item.link}
                                className="inline-flex items-center gap-2 text-gray-700 font-['lora',sans-serif] text-[12px] md:text-[13px] font-semibold tracking-widest uppercase hover:text-[#df9b29] transition-colors duration-300 w-fit mt-auto"
                            >
                                VISIT WEBSITE
                                <ArrowRightCircle size={16} strokeWidth={1.5} className="mt-[1px]" />
                            </a>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default NearbyAttractions;