import { footerLinks } from '@/components/home/helper'
import { CheckIcon, FooterLogoIcon } from '@/components/home/Icons'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="custom-container px-4 pt-13 sm:pt-24">
            <div className="flex flex-col items-start justify-between gap-8 sm:gap-12 lg:flex-row">
                <div className="w-full max-w-[710px]">
                    <FooterLogoIcon />
                    <p className="font-poppins w-full max-w-[413px] py-6 text-base leading-[160%] font-normal text-[#d0d0d0] md:text-lg">
                        Al-powered alerts that show what to buy, when to buy, and how much to allocate.
                    </p>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="flex items-center gap-2">
                            <CheckIcon />
                            <p className="text-base font-medium text-[#d0d0d0] sm:text-lg md:text-xl">
                                Fast signal delivery
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckIcon />
                            <p className="text-base font-medium text-[#d0d0d0] sm:text-lg md:text-xl">
                                No overcomplication
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckIcon />
                            <p className="text-base font-medium text-[#d0d0d0] sm:text-lg md:text-xl">
                                Built by traders, not marketers
                            </p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <ul className="flex flex-col space-y-2 sm:space-y-4">
                        <li className="small-text !text-white">Company</li>
                        {footerLinks.map((link, index) => (
                            <li
                                key={index}
                                className="description transition-all duration-300 ease-in-out hover:!text-[#2a64f6]"
                            >
                                <Link href={link.href}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="mt-[40px] bg-[#010314] px-2 py-4 text-center text-sm text-[#D0D0D0] sm:mt-[60px] md:mt-[77px] md:py-6">
                <p className="mt-3">© ©Aris Capital, 30 Wall Street, New York City, NY 10005 USA</p>
            </div>
        </footer>
    )
}

export default Footer
