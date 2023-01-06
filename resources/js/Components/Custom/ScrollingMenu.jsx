import { Transition } from "@headlessui/react";
import { useState } from "react";
import MenuParameters from "./MenuParameters";
import Popup from "./Popup";

export default function ScrollingMenu(props) {
    const [showMenuParameters, setShowMenuParameters] = useState(false);
    const [popup, setPopup] = useState(false);

    const parameters = {
        button: "Menu Parameters",
        title: "Menu Parameters",
        message: "Menu Parameters",
        buttonText: "Close",
        component: "MenuParameters",

    };

    return (
        <div className="p-6 text-gray-900">
            <MenuParameters>
                <MenuParameters.Trigger>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Menu Parameters
                    </button>
                </MenuParameters.Trigger>
                <MenuParameters.Content>
                    <button
                        className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                        onClick={() => {
                            setPopup(!popup);
                        }}
                    >
                        Menu Parameters
                    </button>
                </MenuParameters.Content>
            </MenuParameters>
            
                <Popup
                    parameters={parameters}
                    show={popup}
                    onClose={() => {
                        setPopup(!popup);
                    }}
                />
            
            
        </div>
    );
}
