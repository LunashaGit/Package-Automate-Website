import ButtonPopup from "@/Components/Custom/ButtonPopup";
import Form from "@/Components/Custom/Form";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import React from "react";

export default function Index(props) {
    const FormParameters = {
        FirstParameter: {
            HTMLTag: "input",
            inputType: "text",
            inputName: "FirstParameter",
            inputLabel: "First Parameter",
            inputPlaceholder: "First Parameter",
            inputRequired: true,
            inputDisabled: false,
            inputReadOnly: false,
            inputAutoFocus: true,
        },
        SecondParameter: {
            HTMLTag: "select",
            inputName: "SecondParameter",
            InParameter: {
                FirstOption: {
                    optionValue: "FirstOption",
                    optionLabel: "First Option",
                },
                SecondOption: {
                    optionValue: "SecondOption",
                    optionLabel: "Second Option",
                },
                ThirdOption: {
                    optionValue: "ThirdOption",
                    optionLabel: "Third Option",
                },
            },
        },
        ThirdParameter: {
            HTMLTag: "textarea",
            inputName: "ThirdParameter",
            inputLabel: "Third Parameter",
            inputPlaceholder: "Third Parameter",
            inputRequired: true,
            inputDisabled: false,
            inputReadOnly: false,
            inputAutoFocus: true,
        },
        FourthParameter: {
            HTMLTag: "input",
            inputType: "submit",
            inputName: "FourthParameter",
            inputDisabled: false,
        },
    };
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Package
                </h2>
            }
        >
            <Head title="Package" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Package</div>
                        <ButtonPopup
                            title="Popup Title"
                            message="Popup Message"
                            buttonText="Close"
                            component={
                                <Form
                                    action="/package"
                                    method="POST"
                                    parameters={FormParameters}
                                />
                            }
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
