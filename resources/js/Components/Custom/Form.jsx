import React, { useEffect, useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { VendorParameters } from "@/Components/Custom/FormParameters/VendorParameter";
import { NodeParameters } from "@/Components/Custom/FormParameters/NodeParameters";

export default function Form(props) {
    const [data, setData] = useState({});

    useEffect(() => {
        switch (props.name) {
            case "Vendor":
                setData(VendorParameters);
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
        Inertia.post(props.action, request, {
            forceFormData: true,
        });
    };

    return (
        <form
            encType={"multipart/form-data"}
            className="flex flex-col items-center justify-center"
            onSubmit={handleSubmit}
        >
            {data &&
                Object.keys(data).map((key, index) => {
                    if (data[key].HTMLTag === "input") {
                        return (
                            <div
                                className="mb-4 w-full flex flex-col items-center justify-center"
                                key={index}
                            >
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor={data[key].inputName}
                                >
                                    {data[key].inputLabel}
                                </label>
                                <input
                                    className={
                                        "w-9/12 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    }
                                    id={data[key].inputName}
                                    name={data[key].inputName}
                                    type={data[key].inputType}
                                    placeholder={data[key].inputPlaceholder}
                                    required={data[key].inputRequired}
                                    disabled={data[key].inputDisabled}
                                    readOnly={data[key].inputReadOnly}
                                    autoComplete="off"
                                    onChange={handleChange}
                                    {...(data[key].inputType === "file"
                                        ? {
                                              onChange: (e) => {
                                                  setRequest({
                                                      ...request,
                                                      [e.target.name]:
                                                          e.target.files[0],
                                                  });
                                              },
                                          }
                                        : {
                                              value: request[
                                                  data[key].inputName
                                              ],
                                          })}
                                    {...(data[key].inputType === "file" &&
                                    data[key].accept
                                        ? {
                                              accept: data[key].accept,
                                          }
                                        : {})}
                                />
                            </div>
                        );
                    } else if (data[key].HTMLTag === "select") {
                        return (
                            <div
                                className="mb-4 w-full flex flex-col items-center justify-center"
                                key={index}
                            >
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor={data[key].inputName}
                                >
                                    {data[key].inputLabel}
                                </label>
                                <select
                                    className="w-9/12 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                            <div
                                className="mb-4 w-full flex flex-col items-center justify-center"
                                key={index}
                            >
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor={data[key].inputName}
                                >
                                    {data[key].inputLabel}
                                </label>
                                <textarea
                                    className="w-9/12 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
