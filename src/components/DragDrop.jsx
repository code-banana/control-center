import React, { useState } from "react";
import Picture from "./Picture";
import { useDrop } from "react-dnd";
import resourcePool from '../track/c10k.json'

const PictureList = {
  'vm': 'src/assets/box.svg',
  'loadbalancer': 'src/assets/box.svg'
};

function DragDrop() {
  console.log(resourcePool)
  const [board, setBoard] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const resourcePoolId = resourcePool.filter((item) => id === item.id);
    setBoard((board) => [...board, resourcePoolId[0]]);
  };
  return (
    <>
      <div className="Pictures shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800">
        {resourcePool.map((item) => {
          return <Picture url={PictureList[item.tag[0]]} id={item.id} name={item.name} description={item.description}/>;
        })}
      </div>
      <br /><hr /><br />
      <div className="drop-box shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800" ref={drop}>
        {board.map((item) => {
          return <Picture url={PictureList[item.tag[0]]} id={item.id} name={item.name} description={item.description}/>;
        })}

      </div>
    </>
  );
}

export default DragDrop;