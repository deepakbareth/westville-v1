import { useState } from 'react'
import img from '../../assets/logo.png'

function Welcome() {
    let [fullPar, setFullPar] = useState(false)

    let par = "Here we provide you with an intimate guide and tour of our home. We will open our doors to share many details about us and the fully appointed living space you will soon come to enjoy. We will let you in on the luxury amenities, our great location, tips on how to pamper yourself and your pet while here."
    let par2 = " We will also share some of our fun yet secret discoveries so your time visiting this magical place called Provincetown is well spent. You too will discover how and why we've made Westville Cottage our second home — and indeed why it's Provincetown’s Best Kept Secret."

    return (
        <>
            <section className='flex justify-center m-10'>
                <div className='w-50% md:w-[50vw] flex flex-col items-start'>
                    <div className='flex items-end  gap-5 ' >
                        <img src={img}
                            alt="welcomelogo"
                            className='w-30 h-auto'
                        />
                        <h2 className='text-2xl font-normal font-bold'>A luxury Vacation Rental</h2>
                    </div>
                    <h2 className='text-5xl text-[#2F586E]'>~Westville Cottage~</h2>
                    <p className="text-xl text-[#3C3C3C] font-thick font-['Raleway']">Here we provide you with an intimate guide and tour of our home. We will open our doors to share many details about us and the fully appointed living space you will soon come to enjoy. We will let you in on the luxury amenities, our great location, tips on how to pamper yourself and your pet while here.</p><span className="text-xl text-[#3C3C3C] font-thick font-['Raleway'] ">{fullPar ? par2 : ""}</span>
                    <button className='text-[#2F586E] cursor-pointer' onClick={() => setFullPar(!fullPar)}>{!fullPar ? "Read More" : "Read Less"}</button>
                </div>
            </section>
        </>
    )
}
export default Welcome