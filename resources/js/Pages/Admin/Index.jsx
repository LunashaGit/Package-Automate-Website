import React, { useEffect, useState } from "react";
import DefaultLayout from "@/Layouts/DefaultLayout";
import { Inertia } from "@inertiajs/inertia";
import Axios from "axios";

export default function Admin(props) {
    const [value, setValue] = useState("");
    const [data, setData] = useState([]);
    useEffect(() => {
        setTimeout(() => {
        if(value.length > 0){
            Axios.get("/api/users", {
                params: {
                    term: value,
                },
            })
                .then((res) => {
                    console.log(res.data.data);
                    setData(res.data.data);
                })
                .catch((err) => {
                    console.error(err);
                });
        } else {
            Axios.get("/api/users")
            .then((res) => {
                console.log(res.data.data);
                setData(res.data.data);
            })
            .catch((err) => {
                console.error(err);
            });
        }},300);
        
    }, [value]);


    return (
        <DefaultLayout auth={props.auth} errors={props.errors}>
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
                                    setValue(e.target.value);
                                }}
                            />
                        </div>
                        <div className="p-6 bg-white border-b border-gray-200">
                            {data && data.map((user) => (
                                <div key={user.id}>
                                    <hr />
                                    <h1>Name : {user.name}</h1>
                                    <h1>Email : {user.email}</h1>
                                    <hr />
                                </div>
                            ))}
                            {data.length == 0 && (
                                <div>
                                    <h1 className="text-red-500">No Data</h1>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}
