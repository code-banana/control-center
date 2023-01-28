import React from "react";

export const RadioInput = ({ label, options, updateSelection,  valueFromConfig}) => {
    return (
        <div className="space-y-1 p-1 w-full text-black text-bold">
            <div className="font-bold space-4">
                <div> {label + " : "} </div><br/>
                <ul class="grid grid-cols-2 gap-2">
                {options.map((item, idx) => {
                    return (
                        <li class="relative">
                                <input class="sr-only peer" type="radio" name={label} id={label+item} value={idx} onChange={(e) => {updateSelection(e.target.value)}} defaultChecked={( valueFromConfig==idx) ? true : false}/>
                                <label class="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent" for={label+item}>
                                    {item}
                                </label>
                                <div class="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
                                ✅
                                </div>
                        </li>
                    )
                })
                }
                </ul>
            </div>
        </div >
    );
};
