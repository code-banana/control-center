import React, { useState } from "react";
import Xarrow from "react-xarrows";

function Resource({ id, url, name, className, onSelect, isHighlight, ...rest }) {

  const selectedClass = "border-2 border-indigo-500 border-dotted rounded-3xl"
  console.log("yo", id)
  return (
    <>
    {id>0 && <Xarrow
    start={"arrow-"+(id-1)} //can be react ref
    end={"arrow-"+id} //or an id
    color="hsl(225, 6%, 25%)"
    curveness="0"
    strokeWidth={2}
  />}
    <div id={"arrow-"+id} className={(isHighlight ? selectedClass : null) + " h-fit w-fit absolute " + className} {...rest} onClick={() => { onSelect(id); }}>
      <p  className={"relative"}>
        <img
          className="h-20 w-20"
          src={url}
          width="150px"
          style={{ border: "0px" }}
        />
        <span className="absolute top-0 mt-8 mx-4 text-black whitespace-prewrap">{name}</span>
      </p>
    </div>
    </>
  );
}

export default Resource;