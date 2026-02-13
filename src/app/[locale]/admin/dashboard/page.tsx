// app/[locale]/admin/dashboard/page.tsx
import AdminDashboard from '@/components/admin/admin-dashboard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  robots: {
    index: false,
    follow: false,
  },
};

export default function DashboardPage() {
  return <AdminDashboard />;
}
