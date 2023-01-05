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
        component: "MenuParameters",
    };

    console.log("ScrollingMenu.jsx: popup = ", popup);
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
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => {
                            setPopup(!popup);
                        }}
                    >
                        Menu Parameters
                    </button>
                </MenuParameters.Content>
            </MenuParameters>
            {popup && (
                <Popup
                    parameters={parameters}
                    onClose={() => setPopup(false)}
                />
            )}
        </div>
    );
}
