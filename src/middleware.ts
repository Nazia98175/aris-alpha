import { type NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'

export async function middleware(request: NextRequest) {
    return await updateSession(request)
}

export const config = {
    matcher: [
        /**
         * Match all request paths except for:
         * - /
         * - _next/static
         * - _next/image
         * - favicon.ico
         * - api/trpc
         * - Any static image file (svg, png, jpg, jpeg, gif, webp)
         */
        // '/((?!^$|^/$|_next/static|_next/image|$|favicon.ico|api/webhooks|api/trade|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}
