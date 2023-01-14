import React from "react";
import { useDrag } from "react-dnd";

function Resource({ id, url, name, className, ...rest }) {

  return (
    <div className={" h-fit w-fit "+className} {...rest}>
    <p className={"relative"}>
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