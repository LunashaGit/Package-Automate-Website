import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/inertia-react";

export default function Default({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen background">
            <nav className=" border-">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/home">
                                    <ApplicationLogo className="block h-10 w-auto fill-current text-gray-800" />
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ml-20 sm:flex">
                                <NavLink
                                    href={route("home.index")}
                                    active={route().current("home.index")}
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    href={route("package.index")}
                                    active={route().current("package.index")}
                                >
                                    Package
                                </NavLink>
                                {auth &&
                                auth.user &&
                                auth.user.isAdmin === 1 ? (
                                    <>
                                        <NavLink
                                            href={route("admin.index")}
                                            active={route().current(
                                                "admin.index"
                                            )}
                                        >
                                            Admin
                                        </NavLink>
                                        <NavLink
                                            href={route("testing.index")}
                                            active={route().current(
                                                "testing.index"
                                            )}
                                        >
                                            Testing
                                        </NavLink>
                                    </>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <div className="ml-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="bg-primary inline-flex items-center px-4 py-3 border border-transparent text-sm leading-4 font-medium rounded-full text-gray-700 hover:text-gray-700 focus:outline-none transition ease-in-out duration-150 drop-shadow-3xl"
                                            >
                                                {auth && auth.user
                                                    ? auth.user.name
                                                    : "Login / Register"}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
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
                                        {auth && auth.user ? (
                                            <>
                                                <Dropdown.Link
                                                    href={route("profile.edit")}
                                                >
                                                    Profile
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    href={route("logout")}
                                                    method="post"
                                                    as="button"
                                                >
                                                    Log Out
                                                </Dropdown.Link>
                                            </>
                                        ) : (
                                            <>
                                                <Dropdown.Link
                                                    href={route("login")}
                                                >
                                                    Login
                                                </Dropdown.Link>
                                                <Dropdown.Link
                                                    href={route("register")}
                                                >
                                                    Register
                                                </Dropdown.Link>
                                            </>
                                        )}
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-mr-2 flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState
                                    )
                                }
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " sm:hidden"
                    }
                >
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink
                            href={route("home.index")}
                            active={route().current("home.index")}
                        >
                            Home
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route("package.index")}
                            active={route().current("package.index")}
                        >
                            Package
                        </ResponsiveNavLink>
                        {auth && auth.user && auth.user.isAdmin === 1 ? (
                            <>
                                <ResponsiveNavLink
                                    href={route("admin.index")}
                                    active={route().current("admin.index")}
                                >
                                    Admin
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                    href={route("testing.index")}
                                    active={route().current("testing.index")}
                                >
                                    Testing
                                </ResponsiveNavLink>
                            </>
                        ) : (
                            <></>
                        )}
                    </div>

                    <div className="pt-4 pb-1 border-t border-gray-200">
                        <div className="px-4">
                            <div className="font-medium text-base text-gray-800">
                                {auth && auth.user ? auth.user.name : ""}
                            </div>
                            <div className="font-medium text-sm text-gray-500">
                                {auth && auth.user ? auth.user.email : ""}
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            {auth && auth.user ? (
                                <>
                                    <ResponsiveNavLink
                                        href={route("profile.edit")}
                                    >
                                        Profile
                                    </ResponsiveNavLink>
                                    <ResponsiveNavLink
                                        method="post"
                                        href={route("logout")}
                                        as="button"
                                    >
                                        Log Out
                                    </ResponsiveNavLink>
                                </>
                            ) : (
                                <>
                                    <ResponsiveNavLink href={route("login")}>
                                        Login
                                    </ResponsiveNavLink>
                                    <ResponsiveNavLink href={route("register")}>
                                        Register
                                    </ResponsiveNavLink>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
