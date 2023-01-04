import { Link } from "@inertiajs/inertia-react";

export default function NavLink({ href, active, children }) {
    return (
        <Link
            href={href}
            className={
                active
                    ? "inline-flex items-center px-1 pt-2 border-b-2 border-tertiary text-xl font-medium leading-5 text-gray-50 focus:outline-none focus:border-primary transition duration-150 ease-in-out drop-shadow-3xl"
                    : "inline-flex items-center px-1 pt-2 border-b-2 border-transparent text-xl font-medium leading-5 text-gray-200 hover:text-gray-50 hover:border-secondary focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out drop-shadow-3xl"
            }
        >
            {children}
        </Link>
    );
}
