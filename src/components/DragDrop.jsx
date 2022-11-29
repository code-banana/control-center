import React, { useState } from "react";
import Picture from "./Picture";
import { useDrop } from "react-dnd";

const PictureList = [
  {
    id: 1,
    url:
      'src/assets/picture01.png',
  },
  {
    id: 2,
    url:
    'src/assets/picture02.png',  },
  {
    id: 3,
    url:
    'src/assets/picture03.png',  },
];

function DragDrop() {
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const pictureList = PictureList.filter((picture) => id === picture.id);
    setBoard((board) => [...board, pictureList[0]]);
  };
  return (
    <>
      <div className="Pictures shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800">
        {PictureList.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
      </div>
      <br/>
      <hr/><br/>
      <div className="drop-box shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800" ref={drop}>
        {board.map((picture) => {
          return <Picture url={picture.url} id={picture.id} />;
        })}
        
      </div>
    </>
  );
}

export default DragDrop;