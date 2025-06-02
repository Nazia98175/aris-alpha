import Image from 'next/image'
import CommonBtn from '../ui/common-btn'

const Header = () => {
    const noiseOptions = [
        'Too many conflicting signals',
        'Bad timing on trades',
        'Unclear direction',
        'Inconsistent results',
    ]
    return (
        <section className="relative mx-auto max-w-[1440px] py-16 lg:py-[103px]" id="home">
            <div className="custom-container">
                <h1 className="gradient-text mb-6 w-fit text-4xl leading-[120%] font-semibold md:text-5xl lg:mb-10 lg:hidden xl:text-[64px]">
                    Trade with Signal. <br className="max-lg:hidden" /> Not Noise.
                </h1>
                <Image
                    className="w-full max-md:hidden lg:absolute lg:top-1/2 lg:right-3 lg:max-w-[650px] lg:translate-y-[-40%] xl:right-6 xl:max-w-[760px]"
                    unoptimized
                    height={200}
                    width={600}
                    src={'/assets/homepage/webp/hero-img.webp'}
                    alt="/"
                />
                <h1 className="gradient-text mb-6 w-fit text-5xl leading-[120%] font-semibold max-lg:mt-10 max-lg:hidden lg:mb-10 xl:text-[64px]">
                    Trade with Signal. <br className="max-lg:hidden" /> Not Noise.
                </h1>
                <article className="relative overflow-hidden rounded-3xl p-6 backdrop-blur-md max-lg:mt-12 max-md:mt-0 lg:max-w-[344px] xl:max-w-[394px]">
                    <span className="absolute top-0 left-0 block h-full w-full rounded-3xl border border-[#122450] backdrop-blur-2xl bg-[#FFFFFF0A]"></span>
                    <h6 className="mb-6 text-2xl text-white relative">What&apos;s Your Noise?</h6>
                    <div className="mb-10 space-y-5 relative">
                        {noiseOptions.map((option, index) => (
                            <label key={index} className="group flex cursor-pointer items-center gap-3">
                                <div className="relative">
                                    <input type="checkbox" className="peer sr-only" />
                                    <div className="h-[26px] w-[26px] rounded-full border-[2.5px] border-white/80 transition-all duration-200 group-hover:border-white peer-checked:border-[#2A64F6] peer-checked:bg-[#2A64F6]">
                                        <svg
                                            className="h-full w-full scale-0 transition-transform duration-200 peer-checked:scale-100"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                d="M9 12l2 2 4-4"
                                                stroke="white"
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <span className="text-base text-[#D0D0D0] duration-300 group-hover:text-white xl:text-lg">
                                    {option}
                                </span>
                            </label>
                        ))}
                    </div>
                    <CommonBtn className='relative' btnText="Get Started" btnUrl="/signup" variant="secondary" />
                </article>
            </div>
        </section>
    )
}

export default Header
