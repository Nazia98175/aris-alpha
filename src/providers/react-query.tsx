'use client'

import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { toast } from 'sonner'
import { useState } from 'react'

const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                queryCache: new QueryCache({ onError: (error) => toast.error(error.message) }),
                mutationCache: new MutationCache({ onError: (error) => toast.error(error.message) }),
            }),
    )

    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default ReactQueryProvider
