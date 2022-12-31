import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
export default function Admin(props) {
    console.log(props.auth.user);
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {props.auth.user.isAdmin == 1 ? (
                                <div>
                                    <h1>Admin</h1>
                                </div>
                            ) : (
                                <div>
                                    <h1>Not Admin</h1>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
