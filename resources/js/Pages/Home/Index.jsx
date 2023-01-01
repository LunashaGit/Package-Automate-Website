import React from "react";
import { Head } from "@inertiajs/inertia-react";
import GuestLayout from "@/Layouts/GuestLayout";

export default function Home(props) {
    return (
        <GuestLayout auth={props.auth} errors={props.errors}>
            <Head title="Home" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                        <div className="p-6 text-gray-900">
                            <h1>Home</h1>
                        </div>
                    </div>
                </div>
            </div>
        </GuestLayout>
    );
}
