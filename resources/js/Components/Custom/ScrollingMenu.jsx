import { useState } from "react";
import MenuParameters from "./MenuParameters";

export default function ScrollingMenu(props) {
    const [showMenuParameters, setShowMenuParameters] = useState(false);
    return (
        <div className="p-6 text-gray-900">
            <MenuParameters>
                <MenuParameters.Trigger>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Menu Parameters
                    </button>
                </MenuParameters.Trigger>
                <MenuParameters.Content>
                    <MenuParameters.Link href="#">Link 1</MenuParameters.Link>
                    <MenuParameters.Link href="#">Link 2</MenuParameters.Link>
                    <MenuParameters.Link href="#">Link 3</MenuParameters.Link>
                </MenuParameters.Content>
            </MenuParameters>
        </div>
    );
}
