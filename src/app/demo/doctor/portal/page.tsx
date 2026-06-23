import React from 'react';
import { PortalDashboard } from '@/components/portal/PortalDashboard';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Doctor Portal | WebGrab',
  description: 'Manage your appointments and settings',
};

export default async function DoctorPortalPage() {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get('portal_auth');

  if (!authCookie) {
    redirect('/demo/doctor/portal/login');
  }

  return (
    <main>
      <PortalDashboard role={authCookie.value} />
    </main>
  );
}
