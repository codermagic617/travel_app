import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Hero = () => {
    return (
        <section className="max-container padding-container flex flex-col gap-20 pb-32 md:gap-28 lg:py-20 xl:flex-row">
            <div className="hero-map" />
            {/* LEFT */}
            <div className="relative z-20 flex flex-1 flex-col">
                <Image src="/camp.svg" alt="camp" width={50} height={50} className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]" />
                <div className="bold-52 lg:bold-88">Putuk Truno Camp Area</div>
                <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
                    We want to be on each of your journey's seeking the satisfaction of seeing the incourruptible beauty of nature. We can help you on an adventure around the world in just on app
                </p>
                <div className="my-11 flex flex-wrap gap-5">
                    <div className="flex items-center gap-2">
                        {Array(5).fill(1).map((_, index) =>
                            <Image src="/star.svg" key={index} alt='start' width={24} height={24} />
                        )}
                    </div>
                    <p className="bold-16 lg:bold-20 text-blue-70">
                        198k
                        <span className="regular-16 lg:regular-20 ml-1 underline">
                            Excellent Reviews
                        </span>
                    </p>
                </div>
                <div className="flex flex-col w-full gap-3 sm:flex-row">
                    <Button type="button" title="Download App" variant="btn_green" />
                    <Button type="button" title="How we work?" icon="/play.svg" variant="btn_white_text" />
                </div>
            </div>
            <div className="relative flex flex-1 items-start">
                <div className="relative flex z-20 w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
                    <div className="flex flex-col">
                        <div className="flexBetween">
                            <p className="regular-16 text-gray-20">
                                Location
                            </p>
                            <Image src='/close.svg' alt='close' width={24} height={24} />
                        </div>
                        <p className="bold-16 text-white">Agus Calientes</p>
                        <div className="flexBetween">
                            <div className="flex flex-col">
                                <p className="regular-16 block text-gray-20">Distance</p>
                                <div className="bold-16 text-white">173.28 mi</div>
                            </div>
                            <div className="flex flex-col">
                                <p className="regular-16 block text-gray-20">Elevation</p>
                                <div className="bold-16 text-white">2.040 km    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero