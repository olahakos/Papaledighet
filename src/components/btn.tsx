import React from "react";

interface ButtonPropos {
    hrefParam: string;
    children: React.ReactNode;
}
const BTN: React.FC<ButtonPropos> = ({ hrefParam, children }) => {
    return (
        <a
            href={hrefParam}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
            {children}
        </a>
    );
};
export default BTN;
