import { PropsWithChildren, ReactNode } from 'react';
import Navbar from "@/Components/NavBar";

export default function AppLayout({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    return (
        <div className="min-h-screen">
            <Navbar />

            <main>{children}</main>
        </div>
    );
}
