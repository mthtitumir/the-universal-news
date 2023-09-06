"use client"

import useRole from '@/hooks/useRole';
import useAuth from '@/hooks/useAuth';
import Spinner from '@/components/ErrorComponents/Spinner';
import { useRouter } from 'next/navigation';

const AdminDashboardLayout = ({ children }) => {
    const { user, loading } = useAuth();
    const [role, isRoleLoading] = useRole();
    const { replace, refresh } = useRouter();
    // console.log(role);

    if (loading || isRoleLoading) {
        return <Spinner />
    }

    if (user && role && role === 'admin') {
        return children;
    }
    refresh()
    replace("/dashboard")
}

export default AdminDashboardLayout