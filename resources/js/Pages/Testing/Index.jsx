import DefaultLayout from "@/Layouts/DefaultLayout";
import { Head } from "@inertiajs/inertia-react";
import React from "react";
import ButtonPopup from "@/Components/Custom/ButtonPopup";
import ScrollingMenu from "@/Components/Custom/ScrollingMenu";
import Form from "@/Components/Custom/Form";
import ThreeTest from "@/Components/Custom/ThreeTest";
import { Inertia } from "@inertiajs/inertia";
import OnePositionScrollingMenu from "@/Components/Custom/OnePositionScrollingMenu";
import Popup from "@/Components/Custom/Popup";
import Login from "@/Components/Custom/Login";
import SyntaxHighlighter from "react-syntax-highlighter/dist/cjs/prism";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function Testing(props) {
    const [showPopupSimple, setShowPopupSimple] = React.useState(false);
    const [showPopupPersonalize, setShowPopupPersonalize] =
        React.useState(false);
    const parameters = {
        button: "Menu Parameters",
        title: "Menu Parameters",
        message: "Menu Parameters",
        buttonText: "Close",
        component: "MenuParameters",
    };
    return (
        <DefaultLayout auth={props.auth} errors={props.errors}>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                        <ScrollingMenu />
                        <div className="p-6 text-gray-900">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => setShowPopupSimple(true)}
                            >
                                Simple
                            </button>

                            <Popup
                                show={showPopupSimple}
                                parameters={parameters}
                                onClose={() => setShowPopupSimple(false)}
                            >
                                <Popup.Default />
                            </Popup>
                        </div>
                        <div className="p-6 text-gray-900">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => setShowPopupPersonalize(true)}
                            >
                                Simple
                            </button>

                            <Popup
                                show={showPopupPersonalize}
                                parameters={parameters}
                                onClose={() => setShowPopupPersonalize(false)}
                            >
                                <Popup.Personalized>
                                    <Login />
                                </Popup.Personalized>
                            </Popup>
                        </div>
                        <SyntaxHighlighter language="jsx" style={docco}>
                            {`
                            const [showPopupSimple, setShowPopupSimple] = React.useState(false);
                            const [showPopupPersonalize, setShowPopupPersonalize] =
                                React.useState(false);
                            const parameters = {
                                button: "Menu Parameters",
                                title: "Menu Parameters",
                                message: "Menu Parameters",
                                buttonText: "Close",
                                component: "MenuParameters",
                            };
                            `}
                        </SyntaxHighlighter>

                        {/* <div>
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
                        </div> */}
                        <div className="p-6 text-gray-900">
                            {props.url ? (
                                <a href={props.url}>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Download
                                    </button>
                                </a>
                            ) : (
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={() => {
                                        // Route to Package
                                        Inertia.get("/package");
                                    }}
                                >
                                    Go to Package
                                </button>
                            )}
                        </div>
                        <div className="p-6 text-gray-900">
                            <OnePositionScrollingMenu />
                        </div>
                        <hr />
                        <div className="m-auto w-4/12">
                            <Form
                                name="Vendor"
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
        </DefaultLayout>
    );
}
