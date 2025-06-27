import { whatYouGet } from '../onboard/Helper'
import CardItem from './CardItem'

const WhatYouGet = () => {
    return (
        <section className="what-get-outer-container-style">
            <h2 className="secondary-heading mb-10 text-center !font-normal">What You Get</h2>

            <div className="grid max-w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {whatYouGet.map((item, idx) => (
                    <CardItem key={idx} icon={item.icon} title={item.title} />
                ))}
            </div>
        </section>
    )
}

export default WhatYouGet
