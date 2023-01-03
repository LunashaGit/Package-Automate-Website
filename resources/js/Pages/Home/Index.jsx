import React, { useState } from "react";
import DefaultLayout from "@/Layouts/DefaultLayout";
import Spline from "@splinetool/react-spline";
import ApplicationLogo from "@/Components/ApplicationLogo";
import BlockSummary from "@/Components/Custom/BlockSummary";
export default function Home(props) {
    const [block] = useState([
        {
            title: "Vendor",
            language: "PHP",
            availability: "Available",
            description:
                "A Vendor package is a collection of PHP code that is bundled together and distributed as a single package.",
        },
        {
            title: "NPM",
            language: "Javascript",
            availability: "Soon...",
            description:
                "An NPM package is a package of code that is published on the NPM registry and can be used in other JavaScript projects.",
        },
        {
            title: "PIP",
            language: "Python",
            availability: "Soon...",
            description:
                "A PIP package is a package of code that is published on the Python Package Index (PyPI) and can be used in Python projects.",
        },
    ]);

    console.log(block);
    return (
        <DefaultLayout auth={props.auth} errors={props.errors}>
            <div className="flex flex-col gap-24 sm:gap-8">
                <div className="py-12 flex flex-col sm:flex-row  justify-center items-center gap-12 sm:gap-44 ">
                    <ApplicationLogo className="drop-shadow-2xl max-w-1/2 max-h-1/2 sm:w-1/4 sm:h-1/4" />
                    <div>
                        <div className="py-10">
                            <h1 className="text-4xl text-white font-bold text-center">
                                Package Automate
                            </h1>
                            <h3>Simplify your Developer's Life!</h3>
                        </div>
                        <span className="block mx-auto text-right drop-shadow-3xl">
                            <a
                                href="/package"
                                className="bg-primary font-semibold px-4 py-3 mx-6 border border-transparent leading-4 font-medium rounded-full"
                            >
                                Create a Package
                            </a>
                        </span>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-16">
                    {block.map((item, index) => (
                        <BlockSummary key={index} details={block[index]} />
                    ))}
                </div>
            </div>
        </DefaultLayout>
    );
}
