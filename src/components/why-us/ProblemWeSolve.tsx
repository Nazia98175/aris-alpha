import Image from 'next/image'

const ProblemWeSolve = () => {
    return (
        <section className="w-full px-4 py-10 text-white lg:py-20 xl:px-0">
            <div className="mx-auto flex w-full max-w-[1140px] flex-col items-center gap-6 justify-between lg:flex-row">
                <div className="font-poppins w-full max-w-full lg:max-w-[542px]">
                    <h2 className="secondary-heading mb-6">The Problem We Solve</h2>
                    <p className="description !text-waterwhite/[80%] mb-6 !leading-[160%]">
                        Today’s investors face a brutal paradox: too much data, too little clarity. Markets are flooded
                        with headlines, sentiment shifts, volatility, and noise. Yet genuine, repeatable alpha is
                        increasingly scarce. Most strategies chase price, rely on backward-looking patterns, or collapse
                        under stress when regimes shift
                    </p>
                    <p className="description !text-waterwhite/[80%] !leading-[160%]">
                        The real challenge isn’t access to information — it’s extracting insight with precision and
                        acting with discipline.
                    </p>
                </div>
                    <Image
                    className='max-w-[280px] sm:max-w-[320px] md:max-w-[401px] max-h-[400px] w-full'
                        src="/assets/homepage/webp/compound-circle-clear.webp"
                        alt="22%+ Target Annual Compound"
                        width={401}
                        height={400}
                    />
            </div>
        </section>
    )
}

export default ProblemWeSolve
