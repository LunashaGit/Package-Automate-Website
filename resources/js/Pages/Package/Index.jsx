import ButtonPopup from "@/Components/Custom/ButtonPopup";
import DefaultLayout from "@/Layouts/DefaultLayout";
import React from "react";

export default function Index(props) {
    return (
        <DefaultLayout auth={props.auth} errors={props.errors}>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Package</div>
                        <div>
                            <ButtonPopup
                                title="Node Title"
                                message="Node Message"
                                buttonText="Close"
                                button="Show Node"
                                component="FormNode"
                            />
                            <ButtonPopup
                                title="Package Title"
                                message="Package Message"
                                buttonText="Close"
                                button="Show Vendor"
                                component="FormVendor"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}
