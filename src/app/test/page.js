"use client"

import useRole from '@/hooks/useRole';
import useAuth from '@/hooks/useAuth';

const Test = () => {
  const { user, loading } = useAuth();
  const [role, isAdminLoading] = useRole();
  console.log(role);

  if (loading || isAdminLoading) {
    return <progress className="progress w-56"></progress>
  }

  if (user && role) {
    return <h1>Hello {role}!</h1>;
  }
  return <h1>Hello now!</h1>
};

export default Test