import { ArrowRight, CheckCircle } from 'lucide-react'

import { Button } from '@/components/ui/ButtonUI'
import { Card } from '@/components/ui/Card'
import Link from 'next/link'

export default function ThankYouPage() {
    return (
        <div className="flex min-h-[calc(100vh-32px)] items-center justify-center sm:min-h-[calc(100vh-64px)]">
            <Card className="bg-sidebar w-full max-w-md p-8 shadow-lg">
                <div className="flex flex-col items-center space-y-6 text-center">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="h-16 w-16 animate-ping rounded-full bg-green-100 opacity-75" />
                        </div>
                        <CheckCircle className="relative h-16 w-16 animate-bounce text-green-500" />
                    </div>

                    <h1 className="text-3xl font-bold tracking-tight text-white">Thank You!</h1>

                    <p className="text-muted-foreground">Your subscription has been confirmed.</p>

                    <div className="my-2 h-px w-full bg-gray-200" />

                    <div className="flex w-full flex-col gap-3 pt-4 sm:flex-row">
                        <Button asChild className="w-full" size="lg">
                            <Link href="/old-dashboard">
                                Go to Dashboard
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}
