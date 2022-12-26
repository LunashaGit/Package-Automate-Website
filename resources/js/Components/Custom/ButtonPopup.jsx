import React from "react";
import { Transition } from "@headlessui/react";
import Popup from "./Popup";
export default function ButtonPopup(props) {
    const [showPopup, setShowPopup] = React.useState(false);
    return (
        <div>
            <div className="p-6 text-gray-900">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => setShowPopup(true)}
                >
                    {props.button}
                </button>
            </div>
            <div className="p-6 text-gray-900">
                <Transition
                    show={showPopup}
                    enter="transition-opacity duration-900"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-900"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Popup
                        parameters={props}
                        onClose={() => setShowPopup(false)}
                    />
                </Transition>
            </div>
        </div>
    );
}
