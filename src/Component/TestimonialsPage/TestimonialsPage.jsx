import React, { useState } from 'react';
import WestvilleCottage from '../ReusableComp/WestvilleCottage';

// Sub-component for individual Testimonial Cards
const TestimonialCard = ({ item }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const isLongText = item.text.length > 200;
    const displayText = (!isExpanded && isLongText)
        ? item.text.substring(0, 200) + '...'
        : item.text;

    return (
        <div className="bg-[#FAF7F2] border-[10px] md:border-[14px] border-white rounded-[18px] md:rounded-[24px] shadow-[0_12px_35px_rgba(0,0,0,0.08)] p-6 md:p-8 flex flex-col justify-between hover:shadow-[0_20px_45px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300 ">
            <div>
                {/* 5 Star Ratings */}
                <div className="flex gap-1.5 mb-6 text-[#d9a44c]">
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                    ))}
                </div>

                {/* Review Text */}
                <p className="font-helvetica text-slate-600 leading-[1.8] text-[15px] md:text-[16px] mb-6 font-normal">
                    "{displayText}"
                </p>

                {/* Read More / Read Less Button */}
                {isLongText && (
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-[#df9b29] hover:text-[#c48824] uppercase tracking-widest text-[12px] font-bold font-lora mb-8 transition-colors cursor-pointer block"
                    >
                        {isExpanded ? 'READ LESS' : 'READ MORE'}
                    </button>
                )}
            </div>

            {/* Separator line & Author */}
            <div>
                <div className="h-[1px] bg-slate-100 w-full mb-6"></div>
                <h4 className="font-helvetica font-bold tracking-wider text-[13px] md:text-[14px] text-[#2D5D80] uppercase">
                    {item.author}
                </h4>
                <span className="text-[12px] text-slate-400 font-raleway font-medium tracking-wide block mt-1">Verified Guest</span>
            </div>
        </div>
    );
};

function TestimonialsPage() {
    const testimonials = [
        {
            text: "We had a fantastic 7 night stay! The location was perfect and close to everything while still nestled in a charming, quiet neighborhood. The property was easy to access, with convenient parking that made coming and going effortless. The communication before and during the stay was exceptional. The home was beautifully appointed, exceptionally clean, and thoughtfully updated with modern upgrades throughout. It had everything we needed for a comfortable and relaxing stay, and the amenities truly made it feel like a home away from home. The personal touches were thoughtful and greatly appreciated. We wouldn't hesitate to stay here again and highly recommend this property to anyone looking for a convenient, comfortable, and welcoming place to stay!",
            author: "Guest (Reservation #HA-8V7K88)"
        },
        {
            text: "Stylish, Comfortable and Expertly Appointed Westville Cottage was stylish, comfortable, and expertly appointed. We particularly loved the private garden and patio space, where we relaxed, read, and had evening cocktails. My husband and I were celebrating our anniversary and Dominic and Paul helped with restaurant recommendations and also had beautiful flowers delivered for the occasion. In addition to being beautiful, the cottage was also dog-friendly. The location was great and it was easy to walk everywhere. We hope to return again soon.",
            author: "Nancy & Todd, Massachusetts"
        },
        {
            text: "The Westville Cottage was FANTASTIC! I rented Westville Cottage for a quiet off-season respite from daily life and was not disappointed. The cottage is so comfortable and well-appointed and its walking location to all the shops and restaurants can't be beaten. Dominic and Paul are the ultimate hosts they couldn't have been more accomodating to me and my faithful dog. I landed up in hospital on my last day and when I contacted D&P, they could not have been nicer about helping me arrange care for my dog and my belongings. Even after my stay, they have kept in touch to keep up with my progress. A stay at Westville is like staying at a friend's home. You immediately feel at home. I hope to stay at Westville again in the fall and would recommend this accommodation to any single person or couple. Dominic and Paul were the perfect hosts for our stay!",
            author: "Don and Gary, Massachusetts"
        },
        {
            text: "Perfect Provincetown Hideaway Oh wow... I almost don't want to write this review because I want to keep the Westville Cottage a secret all to ourselves but I suppose the 'right thing to do' would be to share our wonderful weeklong experience there. From the moment we arrived on a rainy Saturday night, my partner and I felt completely at home thanks, in no small part, to the lovely bottle of wine that was waiting for us. Perfect after a long day of driving. Our pup was also very happy to find a bag of treats and his own personalized name tag (with his address and phone number in Provincetown) waiting for him. The little details like this were what made our stay really special. The cottage is located in a perfect location. Just far enough off the beaten path so you can relax and enjoy the peace and quiet when you arrive home but close enough to the action that a quick, five-minute walk will put you right onto Commercial Street. Everything in the house was of the best quality. The bed was, seriously, the most comfortable bed I've ever slept in. The kitchen was great... I wish we had used it more but there are so many great places to eat, that it was hard to stay home and cook. The bikes they provided were a huge asset as were the beach chairs and towels. We feel very fortunate to have discovered such a welcoming, peaceful home in one of our favorite places in the world. In fact, we've already booked our stay for next year. Thank you, Dominic & Paul",
            author: "James, Brooklyn, NY"
        },
        {
            text: "Wonderful off season stay I rented Westville Cottage for a quiet off-season respite from daily life and was not disappointed. The cottage is so comfortable and well-appointed and its walking location to all the shops and restaurants can't be beaten. Dominic and Paul are the ultimate hosts they couldn't have been more accomodating to me and my faithful dog. I landed up in hospital on my last day and when I contacted D&P, they could not have been nicer about helping me arrange care for my dog and my belongings. Even after my stay, they have kept in touch to keep up with my progress. A stay at Westville is like staying at a friend's home. You immediately feel at home. I hope to stay at Westville again in the fall and would recommend this accommodation to any single person or couple. Dominic and Paul were the perfect hosts for our stay!",
            author: "Joe, Philadelphia, PA"
        },
        {
            text: "Perfect - Westville Cottage is the Best! We were so pleased to find the Westville Cottage in Provincetown MA. We were looking for a new home in order to start our new life and it was sort of last minute. We gave the Westville a shot, and were treated like family from the moment we called! The cottage is quaint and warm, the shower was the best I have used in a long time and the bed was comfy as could be. Unfortunately, we were there in April so we weren't able to appreciate the lovely outdoor patio, but the location couldn't be beaten. We were able to walk to everything we needed to and were very pleased with everything. Dominic and Paul were the perfect hosts for our stay!",
            author: "Jacquline, Philadelphia, PA"
        },
        {
            text: "Classic comfort & style We booked a 4-night stay at the Westville over New Year and will most likely do so again. On our arrival day, we had both worked a full day and then had a 3 1/2 hr drive to P-town. I held my breath and hoped that the place I had reserved for our 'special' New Year was going to be OK. We arrived late, it was cold and we were tired. Opening the private entrance to our unit we were both thrilled with our first few steps inside. The Westville was everything that Dominic (co-owner) described...and more. Cozy, clean comfortable and welcoming. All the stress of the day melted away. Every attention to detail was made with regard to furnishings and cleanliness. This is not 'just a place to sleep'. The kitchen is accommodating and you will want to make some meals there. (which we did!!!!) From a Lobster and asparagus night to a lazy morning brunch with coffee (great coffee maker) enjoying the paper and the surround sound stereo. I must add that one day we enjoyed the surround sound so much that we just danced for about 4-5 hours. The location is within easy walking distance to everything in P-town; yet not so close to downtown that it would be too noisy in the summer. The owners are attentive and followed up with calls before, during, and after our stay to make sure we were all set. They even mailed us some clothing we left behind. (just sweaters.....come one...what did you think?) We plan to ring in 2013 there so don't even think of booking then.",
            author: "Kevin and Alice, New Hampshire"
        },
        {
            text: "Great as Usual This was our fourth year in this spot. It was immaculate as usual and full of the amenities we've become accustomed to! We wouldn't stay anywhere else. It is perfect for two people. We cooked many of our meals here, yet had ready access to a number of great restaurants. It is located near everything yet far enough to be quiet and serene even on busy Memorial Day. Dominic and Paul are great hosts and attentive but not at all intrusive. We respect them and their home, they respect us. We'll be back again next year.",
            author: "Barb, Susan and Jenny the Dog, Oxford Ohio"
        },
        {
            text: "One of my best vacations ever Was beyond my expectations one of the best vacations ever everything u need was there and more can't wait to come back.",
            author: "Jorge, West Palm Beach FL"
        }
    ];

    const [visibleCount, setVisibleCount] = useState(6);

    return (
        <div className="w-full bg-[#fcfbfa] pb-20">
            {/* Reusable Subheader/Logo section at the top */}
            <WestvilleCottage />

            <div className="max-w-[1300px] mx-auto px-6 overflow-hidden">
                {/* Heading */}
                <h2 className="text-[#2D5D80] font-helvetica text-[32px] md:text-[40px] font-normal mb-16 tracking-wide leading-tight w-full text-center uppercase">
                    Testimonials
                </h2>

                {/* Grid Layout of Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full pb-20 px-12">
                    {testimonials.slice(0, visibleCount).map((item, idx) => (
                        <TestimonialCard key={idx} item={item} />
                    ))}
                </div>

                {/* Load More Button */}
                {visibleCount < testimonials.length && (
                    <div className="flex justify-center mt-16">
                        <button
                            onClick={() => setVisibleCount((prev) => prev + 6)}
                            className="inline-block bg-[#df9b29] hover:bg-[#c48824] text-white font-bold font-lora text-[13px] px-10 py-4 tracking-widest uppercase transition-all duration-300 rounded-sm shadow-sm cursor-pointer"
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TestimonialsPage;
