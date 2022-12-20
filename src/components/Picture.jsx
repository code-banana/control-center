import React from "react";
import { useDrag } from "react-dnd";

function Picture({ id, url, name, description }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return ( 
    <p className="relative h-fit w-fit" ref={drag}>
    <img
      className="h-20 w-20 m-2"
      src={url}
      width="150px"
      style={{ border: isDragging ? "5px solid pink" : "0px" }}
    />
      <span className="absolute top-0 mt-8 mx-4 text-black whitespace-nowrap">{name}</span>
    </p>
  );
}

export default Picture;