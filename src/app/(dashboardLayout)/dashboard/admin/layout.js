"use client"
import useRole from '@/hooks/useRole';
import useAuth from '@/hooks/useAuth';

const AdminDashboardLayout = ({ children }) => {
    const { user, loading } = useAuth();
    const [role, isRoleLoading] = useRole();
    console.log(role);

    if (loading || isRoleLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && role && role==='admin') {
        return children;
    }
    return <h1>Hello now!</h1>
}

export default AdminDashboardLayout