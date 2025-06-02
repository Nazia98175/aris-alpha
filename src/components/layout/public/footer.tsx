import { FooterLogoIcon, WhiteCheckIcon } from '@/components/home/Icons'
import Link from 'next/link'

const Footer = () => {
    const navLinks = [
        {
            label: 'Home',
            href: '#home',
        },
        {
            label: 'Learn More',
            href: '#learn-more',
        },
        {
            label: 'About Us',
            href: '#About-Us',
        },
    ]
    return (
        <footer className="custom-container px-4 pt-13 sm:pt-24">
            <div className="flex flex-col items-start justify-between gap-8 sm:gap-12 md:flex-row">
                <div className="w-full max-w-[710px]">
                    <FooterLogoIcon />
                    <p className="small-text py-4">
                        Al-powered alerts that show what to buy, when to buy, <br className="hidden md:block" /> and how
                        much to allocate.
                    </p>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="group flex cursor-pointer items-center gap-2">
                            <WhiteCheckIcon />
                            <p className="text-lg font-medium text-[#d0d0d0] transition-all duration-300 ease-in-out group-hover:text-[#2a64f6] md:text-xl">
                                Fast signal delivery
                            </p>
                        </div>
                        <div className="group flex cursor-pointer items-center gap-2">
                            <WhiteCheckIcon />
                            <p className="text-lg font-medium text-[#d0d0d0] transition-all duration-300 ease-in-out group-hover:text-[#2a64f6] md:text-xl">
                                No overcomplication
                            </p>
                        </div>
                        <div className="group flex cursor-pointer items-center gap-2">
                            <WhiteCheckIcon />
                            <p className="text-lg font-medium text-[#d0d0d0] transition-all duration-300 ease-in-out group-hover:text-[#2a64f6] md:text-xl">
                                Built by traders, not marketers
                            </p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <ul className="flex flex-col space-y-2 sm:space-y-4">
                        <li className="small-text !text-white">Company</li>
                        {navLinks.map((link) => (
                            <li
                                key={link.href}
                                className="description transition-all duration-300 ease-in-out hover:!text-[#0082FF]"
                            >
                                <Link href={link.href}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="text-secondary mt-[40px] bg-[#010314] px-2 py-4 text-center text-sm sm:mt-[60px] md:mt-[77px] md:py-6">
                © ©Aris Capital, 30 Wall Street, New York City, NY 10005 USA
            </div>
        </footer>
    )
}

export default Footer
