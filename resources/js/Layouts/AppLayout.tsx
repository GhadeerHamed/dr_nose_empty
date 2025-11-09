import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { PropsWithChildren, ReactNode, useState } from 'react';

export default function AppLayout({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(true);

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="border-b border-gray-100 bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between">
                        <div className="flex w-full">
                            <div className="flex shrink-0 items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                </Link>
                            </div>

                            <div className={"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex text-gray-900 w-full"}>
                                <NavLink
                                    href={route('home')}
                                    active={route().current('home')}
                                >
                                    Dashboard
                                </NavLink>

                                <NavLink
                                    href={route('about')}
                                    active={route().current('about')}
                                >
                                    About us
                                </NavLink>

                                <NavLink
                                    href={route('services')}
                                    active={route().current('services')}
                                >
                                    Services
                                </NavLink>
                            </div>
                            <div className={"hidden sm:-my-px sm:ms-10 sm:flex justify-center items-center float-right w-48"}>
                                <p> Dr Nose </p>
                            </div>
                        </div>

                        <div
                            className={
                                (showingNavigationDropdown ? 'flex' : 'hidden') +
                                ' sm:hidden w-48 justify-center content-center items-center'
                            }
                        >
                            <Dropdown >
                                <Dropdown.Trigger >
                                    <span className="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
                                        >
                                            <p className={"right-0 flex inline-flex sm:hidden"}>
                                                Dr Nose
                                            </p>
                                            <svg
                                                className="-me-0.5 ms-2 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </span>
                                </Dropdown.Trigger>
                                <Dropdown.Content>
                                    <div className="space-y-1 pb-3 pt-2">
                                        <ResponsiveNavLink
                                            href={route('home')}
                                            active={route().current('home')}
                                        >
                                            Dashboard
                                        </ResponsiveNavLink>
                                        <ResponsiveNavLink
                                            href={route('about')}
                                            active={route().current('about')}
                                        >
                                            About Us
                                        </ResponsiveNavLink>
                                        <ResponsiveNavLink
                                            href={route('services')}
                                            active={route().current('services')}
                                        >
                                            Services
                                        </ResponsiveNavLink>
                                    </div>
                                </Dropdown.Content>

                            </Dropdown>
                        </div>
                    </div>
                </div>

            </nav>

            {header && (
                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
