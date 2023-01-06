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
            
                <Popup show={showPopup} parameters={props} onClose={() => setShowPopup(false)} />
        </div>
    );
}
