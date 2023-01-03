import { Link } from "@inertiajs/inertia-react";

export default function NavLink({ href, active, children }) {
    return (
        <Link
            href={href}
            className={
                active
                    ? "inline-flex items-center px-1 pt-2 border-b-2 border-tertiary text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-primary transition duration-150 ease-in-out drop-shadow-3xl"
                    : "inline-flex items-center px-1 pt-2 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-secondary focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out drop-shadow-3xl"
            }
        >
            {children}
        </Link>
    );
}
