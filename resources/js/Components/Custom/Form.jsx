import React, { useEffect, useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { PackageParameters } from "@/Components/Custom/FormParameters/PackageParameters";
import { NodeParameters } from "@/Components/Custom/FormParameters/NodeParameters";

export default function Form(props) {
    let classValue;

    const [data, setData] = useState({});

    useEffect(() => {
        switch (props.name) {
            case "Package":
                setData(PackageParameters);
                break;
            case "Node":
                setData(NodeParameters);
                break;
            default:
                break;
        }
    }, [props.name]);

    const [request, setRequest] = useState(
        Object.keys(data)
            .slice(0, -1)
            .reduce((obj, key) => {
                obj[key] = "";
                return obj;
            }, {})
    );

    const handleChange = (e) => {
        setRequest({
            ...request,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post(props.action, request);
    };

    return (
        <form onSubmit={handleSubmit}>
            {data &&
                Object.keys(data).map((key, index) => {
                    if (data[key].HTMLTag === "input") {
                        return (
                            <div className="mb-4" key={index}>
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor={data[key].inputName}
                                >
                                    {data[key].inputLabel}
                                </label>
                                <input
                                    className={
                                        data[key].inputName ===
                                        Object.values(data).slice(-1)[0]
                                            .inputName
                                            ? classValue +
                                              " shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            : " shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    }
                                    id={data[key].inputName}
                                    name={data[key].inputName}
                                    type={data[key].inputType}
                                    placeholder={data[key].inputPlaceholder}
                                    required={data[key].inputRequired}
                                    disabled={data[key].inputDisabled}
                                    readOnly={data[key].inputReadOnly}
                                    autoFocus={data[key].inputAutoFocus}
                                    autoComplete="off"
                                    onChange={handleChange}
                                />
                            </div>
                        );
                    } else if (data[key].HTMLTag === "select") {
                        return (
                            <div className="mb-4" key={index}>
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor={data[key].inputName}
                                >
                                    {data[key].inputLabel}
                                </label>
                                <select
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    name={data[key].inputName}
                                    onChange={handleChange}
                                    required={data[key].inputRequired}
                                >
                                    <option value="" disabled selected>
                                        ----
                                    </option>
                                    {Object.keys(data[key].InParameter).map(
                                        (id, indexOption) => {
                                            return (
                                                <option
                                                    value={
                                                        data[key].InParameter[
                                                            id
                                                        ].optionValue
                                                    }
                                                    key={indexOption}
                                                >
                                                    {
                                                        data[key].InParameter[
                                                            id
                                                        ].optionLabel
                                                    }
                                                </option>
                                            );
                                        }
                                    )}
                                </select>
                            </div>
                        );
                    } else if (data[key].HTMLTag === "textarea") {
                        return (
                            <div className="mb-4" key={index}>
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor={data[key].inputName}
                                >
                                    {data[key].inputLabel}
                                </label>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id={data[key].inputName}
                                    name={data[key].inputName}
                                    placeholder={data[key].inputPlaceholder}
                                    required={data[key].inputRequired}
                                    disabled={data[key].inputDisabled}
                                    readOnly={data[key].inputReadOnly}
                                    autoFocus={data[key].inputAutoFocus}
                                    autoComplete="off"
                                    onChange={handleChange}
                                />
                            </div>
                        );
                    }
                })}
        </form>
    );
}
