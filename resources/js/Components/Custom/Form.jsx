import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

export default function Form(props) {
    const [data, setData] = useState(
        Object.keys(props.parameters)
            .slice(0, -1)
            .reduce((obj, key) => {
                obj[key] = "";
                return obj;
            }, {})
    );

    console.log(data);

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post(props.action, data);
    };

    return (
        <form onSubmit={handleSubmit}>
            {Object.keys(props.parameters).map((key, index) => {
                if (props.parameters[key].HTMLTag === "input") {
                    return (
                        <div className="mb-4" key={index}>
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor={props.parameters[key].inputName}
                            >
                                {props.parameters[key].inputLabel}
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id={props.parameters[key].inputName}
                                name={props.parameters[key].inputName}
                                type={props.parameters[key].inputType}
                                placeholder={
                                    props.parameters[key].inputPlaceholder
                                }
                                required={props.parameters[key].inputRequired}
                                disabled={props.parameters[key].inputDisabled}
                                readOnly={props.parameters[key].inputReadOnly}
                                autoFocus={props.parameters[key].inputAutoFocus}
                                autoComplete="off"
                                onChange={handleChange}
                            />
                        </div>
                    );
                } else if (props.parameters[key].HTMLTag === "select") {
                    return (
                        <div className="mb-4" key={index}>
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor={props.parameters[key].inputName}
                            >
                                {props.parameters[key].inputLabel}
                            </label>
                            <select
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name={props.parameters[key].inputName}
                                onChange={handleChange}
                            >
                                {Object.keys(
                                    props.parameters[key].InParameter
                                ).map((id, indexOption) => {
                                    return (
                                        <option
                                            value={
                                                props.parameters[key]
                                                    .InParameter[id].optionValue
                                            }
                                            key={indexOption}
                                        >
                                            {
                                                props.parameters[key]
                                                    .InParameter[id].optionLabel
                                            }
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    );
                } else if (props.parameters[key].HTMLTag === "textarea") {
                    return (
                        <div className="mb-4" key={index}>
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor={props.parameters[key].inputName}
                            >
                                {props.parameters[key].inputLabel}
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id={props.parameters[key].inputName}
                                name={props.parameters[key].inputName}
                                placeholder={
                                    props.parameters[key].inputPlaceholder
                                }
                                required={props.parameters[key].inputRequired}
                                disabled={props.parameters[key].inputDisabled}
                                readOnly={props.parameters[key].inputReadOnly}
                                autoFocus={props.parameters[key].inputAutoFocus}
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
