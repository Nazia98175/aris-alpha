import Image from 'next/image'
import CommonBtn from '../ui/common-btn'

const Dashboard = () => {
    return (
        <section className="relative xl:pt-6">
            <div className="custom-container pb-10">
                <h3 className="mx-auto mb-6 sm:mb-8 lg:mb-12 xl:mb-14 gradient-text text-center text-3xl sm:text-4xl xl:text-[40px] leading-[120%] w-fit">
                    Trusted to Cut Through the Noise
                </h3>
                <Image
                    unoptimized
                    className="w-full"
                    src={'/assets/homepage/webp/dashboard.webp'}
                    width={600}
                    height={200}
                    alt="dashboard-img"
                />
                <CommonBtn
                    className="mx-auto mt-6 sm:mt-8 lg:mt-12 xl:mt-16 w-fit lg:!py-[18px]"
                    btnText="Get Started"
                    btnUrl="/"
                    variant="primary"
                />
            </div>
            <Image
                unoptimized
                className="absolute bottom-0 z-[-1] w-full opacity-[32%]"
                src={'/assets/homepage/png/dashboard-bg.png'}
                width={600}
                height={200}
                alt="dashboard-img"
            />
        </section>
    )
}

export default Dashboard
