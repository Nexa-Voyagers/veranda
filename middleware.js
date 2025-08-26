import { NextResponse } from 'next/server'

export function middleware(request) {
  // Skip protection for API routes and static files
  if (request.nextUrl.pathname.startsWith('/api') || 
      request.nextUrl.pathname.startsWith('/_next')) {
    return NextResponse.next()
  }

  const basicAuth = request.headers.get('authorization')
  const url = request.nextUrl

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [user, pwd] = Buffer.from(authValue, 'base64').toString().split(':')

    if (user === 'admin' && pwd === process.env.SITE_PASSWORD) {
      return NextResponse.next()
    }
  }

  return new Response('Access Denied', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Private Site"',
    },
  })
}
