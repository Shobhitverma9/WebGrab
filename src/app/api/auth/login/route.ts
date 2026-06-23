import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    // In a real application, you would hash the password and store it in MongoDB.
    // For this demo, we use hardcoded credentials for the doctor and receptionist.
    const validUsers = {
      doctor: 'doctor123',
      receptionist: 'reception123'
    };

    if (validUsers[username as keyof typeof validUsers] === password) {
      // Set an HTTP-only cookie for authentication
      (await cookies()).set('portal_auth', username, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/demo/doctor/portal',
      });

      return NextResponse.json({ success: true, role: username });
    } else {
      return NextResponse.json({ success: false, error: 'Invalid username or password' }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Authentication failed' }, { status: 500 });
  }
}

export async function DELETE() {
  // Logout route
  (await cookies()).delete('portal_auth');
  return NextResponse.json({ success: true });
}
