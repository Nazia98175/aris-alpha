'use client'

import React from 'react'

const WhoAreWe = () => {
    return (
        <section className="relative flex h-auto flex-col items-center justify-center bg-[url('/assets/backgrounds/working-bg.webp')] bg-cover bg-center px-6 py-10 text-white md:h-[603px] md:py-20 xl:px-0">
            <div className="w-full max-w-[866px] text-center text-white">
                <p className="medium-text mb-3">Who Are We</p>
                <h2 className="main-heading mb-6">Aris Capital</h2>
                <p className="description !font-poppins !text-[#D0D0D0]/[80%]">
                    Aris Capital is a proprietary trading and alpha research firm founded by a team of seasoned
                    investors, traders, and AI researchers with deep expertise across global markets, quantitative
                    finance, and applied machine learning. Our mission is to generate long-term, market-beating returns
                    by systematically uncovering signal buried beneath the noise — with a target of compounding at 22%+
                    annually over the long term.
                </p>
            </div>
        </section>
    )
}

export default WhoAreWe
