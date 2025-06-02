import CheckboxInput from './CheckboxInput'
import { step1Options } from './Helper'
import { ArrowIcon } from './Icons'

const Step1 = () => {
    return (
        <section className="mx-auto flex min-h-full w-full max-w-[477px] flex-col px-4 pb-8">
            <div className="mx-auto mt-5 w-full max-w-[422px]">
                <h3 className="text-center text-3xl leading-[120%] md:text-[40px]">
                    Let’s Tune Your <br /> Strategy Feed
                </h3>
            </div>
            <p className="mt-4 text-center leading-[120%] text-white/70 md:mt-8 md:text-lg">
                How do you typically manage your portfolio?
            </p>
            <div className="my-4 w-full space-y-2.5 md:my-8 md:space-y-3.5">
                {step1Options.map((obj, index) => (
                    <CheckboxInput obj={obj} key={index} />
                ))}
            </div>
            <p className="text-center leading-[120%] text-white/70 md:text-lg">
                We’ll pace your signals to match your rhythm.
            </p>

            <div className="mt-7 flex w-full flex-col-reverse items-center justify-between gap-3 sm:flex-row">
                <p className="font-medium text-white/70 md:text-xl">Skip For Now</p>
                <div className="flex items-center gap-3">
                    <button className="pointer-events-none flex items-center gap-2.5 rounded-3xl border-[1.5px] border-[#FCF6F1] bg-[#FCF6F1] px-6 py-2.5 text-base leading-[120%] text-[#010101] duration-300 hover:bg-transparent hover:text-[#FCF6F1] sm:rounded-[40px] sm:py-4">
                        <ArrowIcon />
                        Back
                    </button>
                    <button className="flex items-center gap-2.5 rounded-3xl border-[1.5px] border-[#FCF6F1] bg-transparent px-6 py-2.5 text-base leading-[120%] text-[#FCF6F1] duration-300 hover:bg-[#FCF6F1] hover:text-[#010101] sm:rounded-[40px] sm:py-4">
                        Next
                        <span className="rotate-180">
                            <ArrowIcon />
                        </span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Step1
