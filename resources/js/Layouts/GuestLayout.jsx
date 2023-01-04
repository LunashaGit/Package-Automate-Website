import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';

export default function Guest({ children }) {
    return (
        <div className="background min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div className="bg-white w-full sm:max-w-md mt-6 px-6 py-4 shadow-md p-4 sm:rounded-lg">
                <Link href="/">
                    <ApplicationLogo className="w-32 h-32 p-4 m-auto fill-current text-gray-500 bg-white rounded-full mt-moins5" />
                </Link>
                {children}
            </div>
        </div>
    );
}
