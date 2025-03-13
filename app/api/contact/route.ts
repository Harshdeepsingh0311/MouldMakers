import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  
  // Here you would typically send an email or save to a database
  console.log('Received contact form submission:', body)

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  return NextResponse.json({ message: 'Thank you for your message. We will get back to you soon.' })
}

