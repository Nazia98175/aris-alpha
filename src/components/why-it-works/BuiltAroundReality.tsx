import { featureListItems } from '../onboard/Helper'
import { BuiltAroundSvg } from '../onboard/Icons'
import FeatureListItem from './FeatureListItem'

const BuiltAroundReality = () => {
    return (
        <div className="relative mx-auto w-full max-w-[1140px]">
            <div className="relative top-6 lg:absolute xl:top-0">
                <BuiltAroundSvg className='h-[420px] xl:h-[470px] max-xxs:-mt-44 -my-36 xs:-my-28 sm:-my-24 md:-my-16 lg:-my-0' />
            </div>
            <section className="built-around-container-style">
                <div className="w-full max-w-full lg:max-w-[433px]">
                    <h2 className="secondary-heading">Built Around Market Reality</h2>
                    <p className="description !text-waterwhite/[80%] mb-3 !leading-[160%] md:mb-6">
                        The best traders don’t guess. They move early — when conviction starts to build.
                    </p>
                    <div className="built-around-button-style">Our system is built to do the same:</div>
                    <ul className="text-waterwhite/[80%] space-y-3 text-base !leading-[160%] md:text-lg">
                        {featureListItems.map((item, idx) => (
                            <FeatureListItem key={idx} icon={item.icon} text={item.text} />
                        ))}
                    </ul>
                    <p className="mt-3 text-sm leading-[150%] font-medium text-white md:mt-6 md:text-base">
                        It mirrors how top desks position. Now, so can you.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default BuiltAroundReality
