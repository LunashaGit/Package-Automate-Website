import React, { useState, useEffect } from "react";

export default function BlockSummary(props) {
    console.log(props.details.title);
    const [Logo, setLogo] = useState(null);

    useEffect(() => {
        switch (props.details.title) {
            case "Composer":
                import("@/Components/Custom/img/logo/vendor.png").then(
                    (img) => {
                        setLogo(() => img.default);
                    }
                );
                break;
            case "NPM":
                import("@/Components/Custom/img/logo/npm.png").then((img) => {
                    setLogo(() => img.default);
                });
                break;
            case "PIP":
                import("@/Components/Custom/img/logo/pip.png").then((img) => {
                    setLogo(() => img.default);
                });
                break;
            default:
                break;
        }
    }, [props.details.title]);

    if (!Logo) return null;

    return (
        <div className="bg-primary flex flex-col justify-between items-center sm:max-w-21.5  p-4 rounded-lg drop-shadow-3xl h-64 ">
            <img
                src={Logo}
                alt={props.details.title}
                className="p-2 bg-white rounded-full
                drop-shadow-3xl
                w-24 h-24
                m-moins4"
            />
            <div className="text-center flex flex-col gap-4">
                <div className="flex flex-row gap-4 justify-center items-center">
                    <h1 className="text-2xl font-bold text-neutral-50">
                        {props.details.title}
                    </h1>
                    <h3 className="text-base font-bold text-neutral-100">
                        {props.details.language}
                    </h3>
                </div>
                <p className="text-justify text-neutral-200 max-w-xs">
                    {props.details.description}
                </p>
                <h3 className={
                    props.details.availability === "Available" ? "text-neutral-100 font-bold" : "text-neutral-500 font-bold"
                    
                }>
                    {props.details.availability}
                </h3>
            </div>
        </div>
    );
}
