import Image from 'next/image'
import CommonBtn from '../ui/CommonBtn'

const Dashboard = () => {
    return (
        <section
            className="relative bg-[url('/assets/homepage/png/working-another-bg.png')] bg-cover bg-center bg-no-repeat min-[2500px]:!pt-[100px] xl:pt-6"
            id="dashboard"
        >
            <div className="custom-container relative z-10 pb-10">
                <h3 className="mx-auto mb-6 w-fit text-center text-3xl leading-[120%] text-white sm:mb-8 sm:text-4xl lg:mb-12 xl:mb-14 xl:text-[40px]">
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
                    className="mx-auto mt-6 w-fit sm:mt-8 lg:mt-12 lg:!py-[18px] xl:mt-16"
                    btnText="Get Started"
                    btnUrl="/onboarding"
                    variant="secondary"
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
