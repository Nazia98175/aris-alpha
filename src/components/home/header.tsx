import { Button } from '../ui/button'
import Container from '../ui/container'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <Container className="flex flex-col gap-7 text-center">
            <h1 className="m-auto w-full max-w-3xl text-3xl leading-10 sm:text-7xl sm:leading-24">
                Smarter Signals Better Trades
            </h1>
            <p className="text-muted-foreground m-auto w-full max-w-2xl text-sm leading-6 font-normal sm:text-base">
                AI-powered alerts that show you exactly what to buy, when to buy, and how much to invest.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/signup">
                    <Button variant="vibrant" size="xl">
                        Get Started
                    </Button>
                </Link>
                <Link href="#live-insights">
                    <Button variant="outline" size="xl">
                        Learn More
                    </Button>
                </Link>
            </div>
        </Container>
    )
}

export default Header
