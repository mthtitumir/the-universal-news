"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./AuthProvider";
const Providers = ({ children }) => {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>{children}</AuthProvider>
        </QueryClientProvider>
    );
};

export default Providers;