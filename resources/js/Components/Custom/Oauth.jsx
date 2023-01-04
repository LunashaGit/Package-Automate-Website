import Google from "@/Components/Custom/img/logo/google.svg";
import Github from "@/Components/Custom/img/logo/github.svg";
import React, { useState } from "react";

export default function Oauth(props) {
    const [link] = useState(['google', 'github'])

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    return (
        <div className="flex flex-col gap-4 items-center justify-between mt-4">
            {link.map((item, index) => 
                 (
                    <a 
                        key={index}
                        href={route(item + ".login")}
                        className="w-full no-underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <div className={(item == "google" ? "bg-primary" : "bg-quaternary") + " flex justify-center items-center p-2 gap-4 rounded-md"}>
                            <img className="w-6" src={item == "google" ? Google : Github} />
                            <p className="text-white font-semibold">{props.name} with {capitalizeFirstLetter(item)}</p>
                        </div>
                    </a>
                ))}
        </div>
    );
}
