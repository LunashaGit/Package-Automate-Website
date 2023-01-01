import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Form from "./Form";
export default function OnePositionScrollingMenu(props) {
    const [selectedItem, setSelectedItem] = useState({ value: "Vendor" });
    const [animationItem, setAnimationItem] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [buttonList, setButtonList] = useState(["Vendor", "Node"]);

    function toggleList() {
        setIsOpen(!isOpen);
    }

    function handleSelect(value) {
        setTimeout(() => {
            setAnimationItem(true);
        }, 100);

        setSelectedItem(value);
    }

    return (
        <div className="relative inline-block text-left w-full">
            <button
                type="button"
                className=" inline-flex justify-center w-4/12 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => {
                    setAnimationItem(false),
                        setTimeout(() => {
                            toggleList();
                        }, 100);
                }}
            >
                Push
            </button>
            <Transition
                show={isOpen}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
                className="flex flex-row "
            >
                {isOpen && (
                    <div className="h-1/2 z-10 w-4/12 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                        <div
                            className="py-1"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                        >
                            {buttonList.map((item, index) => (
                                <button
                                    key={index}
                                    className={`${
                                        selectedItem.value === item
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700"
                                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                    onClick={() => {
                                        setAnimationItem(false),
                                            setTimeout(
                                                () =>
                                                    handleSelect({
                                                        value: item,
                                                    }),
                                                100
                                            );
                                    }}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
                <div>
                    {selectedItem.value ? (
                        <Transition
                            show={animationItem}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Form
                                name={selectedItem.value}
                                action="/package"
                                method="POST"
                            />
                        </Transition>
                    ) : (
                        <div></div>
                    )}
                </div>
            </Transition>
        </div>
    );
}
