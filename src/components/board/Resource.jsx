import React, { useState } from "react";
import { useDrag } from "react-dnd";

function Resource({ id, url, name, className, onSelect, isHighlight, ...rest }) {

  const selectedClass = "border-2 border-indigo-500 border-dotted rounded-3xl"
  console.log("yo", id)
  return (
    <div className={(isHighlight ? selectedClass : null) + " h-fit w-fit " + className} {...rest} onClick={() => { onSelect(id); }}>
      <p  id={"arrow-"+id} className={"relative"}>
        <img
          className="h-20 w-20"
          src={url}
          width="150px"
          style={{ border: "0px" }}
        />
        <span className="absolute top-0 mt-8 mx-4 text-black whitespace-prewrap">{name}</span>
      </p>
    </div>
  );
}

export default Resource;