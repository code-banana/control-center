import React from "react";
import { useDrag } from "react-dnd";

function Resource({ id, url, name, ...rest }) {
  return (
    <div {...rest}>
    <p className={"relative h-fit w-fit "}>
    <img
      className="h-20 w-20 m-2"
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