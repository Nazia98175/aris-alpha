import { Button } from '../ui/button'
import Container from '../ui/container'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <Container className="flex flex-col gap-7 text-center">
            <h1 className="m-auto w-full max-w-4xl text-3xl leading-10 sm:text-7xl sm:leading-24">
                Tactical Signal Infinite
                <Image
                    alt="infinity"
                    src="/assets/icons/infinite.png"
                    height={160}
                    width={320}
                    className="inline h-10 w-auto sm:h-20"
                    quality={100}
                    priority={false}
                />
                Opportunity
            </h1>
            <p className="text-muted-foreground m-auto w-full max-w-2xl text-sm leading-6 font-normal sm:text-base">
                Unlock real-time market signals to help you stay ahead, Powered by live data, built for smarter
                decision-making.
            </p>

            <div className="flex items-center justify-center gap-4">
                <Link href="/signup">
                    <Button variant="vibrant" size="xl">
                        Get Started
                    </Button>
                </Link>
                <Link href="#why-us">
                    <Button variant="outline" size="xl">
                        Learn More
                    </Button>
                </Link>
            </div>
        </Container>
    )
}

export default Header
