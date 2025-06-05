'use client'
import { useState } from 'react'
import { ArrowIcon, ListItem } from './Icons'

const ReadyToFilter = () => {
    const [email, setEmail] = useState('')
    const [subscribedToUpdates, setSubscribedToUpdates] = useState(false)

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSubscribedToUpdates(e.target.checked)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Submitted Email:', email)
        console.log('Subscribed to updates:', subscribedToUpdates)
        setEmail('')
        setSubscribedToUpdates(false)
    }

    const listItems = [
        { label: 'Built by traders, not marketers' },
        { label: 'Fast, focused, frictionless' },
        { label: 'Join other tactical investors' },
    ]

    return (
        <section className="mx-auto my-10 flex w-full max-w-[589px] flex-col items-center justify-center px-4 py-10 text-white">
            <h1 className="gradient-text mx-auto mb-5 w-fit text-center text-4xl leading-[120%] md:text-5xl lg:mb-8 xl:text-[64px]">
                Ready to Filter <br /> the Market?
            </h1>
            <p className="mb-8 text-center text-base leading-[150%] font-medium text-white/70 sm:mb-7 md:mb-10 md:text-lg lg:mb-14 lg:text-xl">
                Unlock personalized signals. No spam. Cancel anytime.
            </p>

            <div className="rounded-2xl border border-[#2A64F6] bg-[#FCF6F1] px-2 py-4 text-[#010101] backdrop-blur-[10px] md:p-4 lg:rounded-[32px] lg:p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="mb-1 block text-sm font-medium">
                            Email<span className="text-red-500">*</span>
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={handleChangeEmail}
                            required
                            placeholder="Enter email"
                            className="h-[45px] w-full rounded-4xl border border-[#D0D0D0] p-5 text-sm backdrop-blur-sm placeholder:text-[#666361] focus:ring-2 focus:ring-[#2A64F6] focus:outline-none md:h-[63px]"
                        />
                    </div>

                    <div className="flex cursor-pointer items-start gap-1 text-xs text-[#010101] sm:items-center md:gap-2 md:text-sm lg:text-base">
                        <input
                            id="updates"
                            type="checkbox"
                            checked={subscribedToUpdates}
                            onChange={handleCheckboxChange}
                            className="h-5 w-5 rounded-[3px] accent-[#2A64F6]"
                        />
                        <label htmlFor="updates" className="cursor-pointer font-medium">
                            Send me weekly market updates{' '}
                            <span className="font-light italic opacity-70">(Optional)</span>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="flex h-[45px] w-full cursor-pointer items-center justify-center gap-2.5 rounded-[40px] border border-[#2A64F6] bg-[#2A64F6] text-base text-white shadow-[0px_0px_10px_0px_rgba(119,68,255,0.70)] transition-all duration-300 hover:bg-transparent hover:text-[#2A64F6] md:h-[63px]"
                    >
                        Unlock My Dashboard{' '}
                        <span className="rotate-180">
                            <ArrowIcon />
                        </span>
                    </button>
                </form>

                <ul className="mt-6 space-y-2 text-sm lg:text-base">
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
