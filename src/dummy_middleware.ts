import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside

const protectedRoutes = ['/class/:path*', '/dashboard/:path*']
const unprotectedRoutes = ['/']
const autehnticatedRoutes = ['/signin', '/signup']

export function middleware(request: NextRequest) {
  return NextResponse.next(request)
  // return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [...protectedRoutes, ...unprotectedRoutes, ...autehnticatedRoutes],
}