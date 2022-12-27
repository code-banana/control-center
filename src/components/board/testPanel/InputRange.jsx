import React, { useEffect, useRef, useState } from "react";

export const InputRange = (props) => {
    const { range, label,unit, onChange } = props;
    const [value, setValue] = useState(range[range.length - 1])

    const handleDrag = (event) => {
        setValue(range[event.target.value])
        onChange(range[event.target.value])
    };

    return (
        <div className="flex flex-col space-y-1 p-1 w-full text-black text-bold">
            <div className="font-bold flex justify-between space-x-4">
               <div> {label+" : "} </div>
               <div > <span className="border-2 px-1 w-20 inline-block">{value}</span> <span>{" "+unit}</span> </div>
            </div>
            <input type="range" min={0} max={range.length - 1} step="1"  onChange={handleDrag} />
        </div >
    );
};
