import { ListItem } from './Icons'

const ReadyToFilter = () => {
    const listItems = [
        { label: 'Built by traders, not marketers' },
        { label: 'Fast, focused, frictionless' },
        { label: 'Join other tactical investors' },
    ]
    return (
        <section className="mx-auto my-10 w-full max-w-[589px] px-4 text-white sm:my-14 md:my-16 lg:my-24 xl:my-[130px]">
            <h1 className="gradient-text mx-auto mb-5 w-fit text-center text-4xl leading-tight md:text-5xl lg:mb-8 xl:text-[64px]">
                Ready to Filter <br /> the Market?
            </h1>
            <p className="mb-8 text-center text-base leading-relaxed font-medium text-white/70 sm:mb-7 md:mb-10 md:text-lg lg:mb-14 lg:text-xl">
                Unlock personalized signals. No spam. Cancel anytime.
            </p>

            <div className="rounded-2xl border border-[#2A64F6] bg-[#FCF6F1] px-2 py-4 text-[#010101] backdrop-blur-[10px] md:p-4 lg:rounded-[32px] lg:p-6">
                <form action="#" className="space-y-4">
                    <div>
                        <label htmlFor="email" className="mb-1 block text-sm font-medium">
                            Email<span className="text-red-500">*</span>
                        </label>
                        <input
                            id="email"
                            type="email"
                            required
                            placeholder="Enter email"
                            className="h-14 w-full rounded-4xl border border-[#D0D0D0] p-5 text-sm backdrop-blur-sm placeholder:text-[#666361] focus:ring-2 focus:ring-[#2A64F6] focus:outline-none"
                        />
                    </div>

                    <div className="flex items-center gap-2 text-xs md:text-sm lg:text-base">
                        <input id="updates" type="checkbox" className="h-4 w-4 accent-[#2A64F6]" />
                        <label htmlFor="updates" className="font-medium">
                            Send me weekly market updates <span className="font-light italic">(Optional)</span>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-full border-[1.5px] border-[#2A64F6] px-6 py-3 text-sm font-medium text-[#2A64F6] duration-300 hover:bg-[#2A64F6] hover:text-white md:text-base lg:px-10 lg:py-[13px]"
                    >
                        Unlock My Dashboard
                    </button>
                </form>

                <ul className="mt-6 space-y-2 text-sm font-medium">
                    {listItems.map((list, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <span className="opacity-70">
                                <ListItem />
                            </span>
                            {list.label}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default ReadyToFilter
