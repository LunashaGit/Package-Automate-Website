import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";

export default function Admin(props) {
    const [value, setValue] = useState(() => {
        if (!window.location.href.includes("term")) {
            localStorage.removeItem("search");
        }
        return localStorage.getItem("search") || "";
    });

    useEffect(() => {
        localStorage.setItem("search", value);
    }, [value]);

    const search = (e) => {
        setTimeout(() => {
            Inertia.get(route("admin.index"), {
                term: e,
            });
        }, 1500);
    };
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
                        <div className="p-6 bg-white border-b border-gray-200">
                            <label for="search">Search</label>
                            <input
                                type="text"
                                name="search"
                                id="search"
                                placeholder="Search"
                                className="border-2 border-gray-300 p-2 w-full rounded-lg"
                                value={value}
                                onChange={(e) => {
                                    setValue(e.target.value),
                                        search(e.target.value);
                                }}
                            />
                        </div>
                        <div className="p-6 bg-white border-b border-gray-200">
                            {props.users.data.map((user) => (
                                <div key={user.id}>
                                    <hr />
                                    <h1>Name : {user.name}</h1>
                                    <h1>Email : {user.email}</h1>
                                    <hr />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
