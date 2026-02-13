import AdminLogin from '@/components/admin/admin-login';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Login',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return <AdminLogin />;
}
