import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import React from "react";
import ButtonPopup from "@/Components/Custom/ButtonPopup";
import ScrollingMenu from "@/Components/Custom/ScrollingMenu";
import Form from "@/Components/Custom/Form";
import ThreeTest from "@/Components/Custom/ThreeTest";

export default function Testing(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Testing
                </h2>
            }
        >
            <Head title="Testing" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                        <ScrollingMenu />
                        <div>
                            <ButtonPopup
                                title="Popup Title"
                                message="Popup Message"
                                buttonText="Close"
                                button="Without Component"
                            />
                            <ButtonPopup
                                title="Popup Title"
                                message="Popup Message"
                                buttonText="Close"
                                button="With Component"
                                component="FormNode"
                            />
                        </div>
                        <div className="m-auto w-4/12">
                            <Form
                                name="Package"
                                action="/package"
                                method="POST"
                            />
                        </div>
                        <div>
                            <ThreeTest />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
