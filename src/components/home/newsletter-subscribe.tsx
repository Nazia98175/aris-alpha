import { Button } from '../ui/button'
import Container from '../ui/container'
import { Mail } from 'lucide-react'
import React from 'react'

const NewsLetterSubscribe = () => {
    return (
        <Container className="relative flex flex-col items-center gap-7 text-center sm:gap-10">
            <div className="relative">
                <div className="relative z-10 space-y-5" id="subscribe">
                    <h2 className="text-3xl font-medium sm:text-7xl">
                        Subscribe <br />
                        to our Newsletter
                    </h2>
                    <p className="text-muted-foreground max-w-5xl text-sm sm:text-base">
                        Get weekly update about our product on your email, no spam guaranteed we promise ✌️
                    </p>
                </div>

                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 rotate-[106deg] transform blur-[200px] sm:h-[225px] sm:w-[300px]"
                    style={{
                        background:
                            'linear-gradient(258.8deg, rgba(96, 63, 254, 0.8) 16.35%, rgba(0, 26, 255, 0.8) 77.56%)',
                    }}
                ></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 rotate-[106deg] transform bg-white/75 blur-[200px] sm:h-[115px] sm:w-[400px]"></div>
            </div>

            <div
                className="w-full max-w-xl"
                style={{
                    border: '1px solid',

                    borderImageSource:
                        'linear-gradient(270deg, rgba(226, 226, 226, 0) 0%, #FFFFFF 47.12%, rgba(124, 124, 124, 0) 100%)',
                    borderImageSlice: 1,
                }}
            ></div>

            <div className="flex w-full max-w-3xl gap-4 overflow-hidden rounded-xl border border-white/10 bg-white/5 px-5 py-3 sm:px-10 sm:py-7">
                <div className="flex flex-1 items-center gap-4">
                    <Mail />
                    <input
                        className="placeholder:text-muted-foreground w-full text-sm focus:outline-0 sm:text-base"
                        placeholder="email123@gmail.com"
                    />
                </div>
                <Button variant="vibrant" size="xl">
                    Subscribe Now
                </Button>
            </div>
        </Container>
    )
}

export default NewsLetterSubscribe
