import React from "react";

export const RadioInput = ({ label, options, updateSelection,  valueFromConfig}) => {

    console.log("value", valueFromConfig)

    return (
        <div className="space-y-1 p-1 w-full text-black text-bold">
            <div className="font-bold flex space-x-4">
                <div> {label + " : "} </div>
                {options.map((item, idx) => {
                    return (<div class="form-check form-check-inline">
                        <input class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name={label} id={label+item} value={idx} onChange={(e) => {updateSelection(e.target.value)}} defaultChecked={( valueFromConfig==idx) ? true : false}/>
                        <label class="form-check-label inline-block text-gray-800" for={label+item}>{item}</label>
                    </div>)
                })
                }
            </div>
        </div >
    );
};
