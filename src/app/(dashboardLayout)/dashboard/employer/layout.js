"use client"
import useAuth from '@/hooks/useAuth';
import Spinner from '@/components/ErrorComponents/Spinner';
import { useRouter } from 'next/navigation';
import useRole from '@/hooks/useRole';

const EmployerDashboardLayout = ({ children }) => {
    const { user, loading } = useAuth();
    const [role, isRoleLoading] = useRole();
    const { replace, refresh } = useRouter();
    // console.log(role);

    if (loading || isRoleLoading) {
        return <Spinner />
    }

    if (user && role && role === 'employer') {
        return children;
    }
    refresh();
    replace("/dashboard");
}

export default EmployerDashboardLayout