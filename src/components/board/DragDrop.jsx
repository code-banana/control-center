import React, { useCallback, useEffect, useState } from "react";
import { ItemTypes } from "./ContainerTypes";
import update from 'immutability-helper'
import { Container } from "./Container";
import { Box } from "./Box";


const PictureList = {
  'vm': 'src/assets/box.svg',
  'loadbalancer': 'src/assets/box.svg',
  'runtime': 'src/assets/box.svg'
};

function DragDrop({ resourcePool }) {
  const [board, setBoard] = useState([]);

  // const [{ isOver }, drop] = useDrop(() => ({
  //   accept: "image",
  //   drop: (item) => addImageToBoard(item.id),
  //   collect: (monitor) => ({
  //     isOver: !!monitor.isOver(),
  //   }),
  // }));
  const initContainers = [{
    accepts: [ItemTypes.Vm],
    lastDroppedItem: null
  },
  {
    accepts: [ItemTypes.Service],
    lastDroppedItem: null
  },
  {
    accepts: [ItemTypes.Database],
    lastDroppedItem: null,
  },
  {
    accepts: [ItemTypes.Service, ItemTypes.Database],
    lastDroppedItem: null
  }]
  const [containers, setContainers] = useState(initContainers)

  useEffect(()=> {
    setContainers(initContainers)
    setDroppedBoxNames([])
  },[resourcePool])

  // const addImageToBoard = (id) => {
  //   const resourcePoolId = resourcePool.filter((item) => id === item.id);
  //   setBoard((board) => [...board, resourcePoolId[0]]);
  // };

  const [droppedBoxNames, setDroppedBoxNames] = useState([])
  function isDropped(boxName) {
    return droppedBoxNames.indexOf(boxName) > -1
  }
  const handleDrop = useCallback(
    (index, item) => {
      const { name } = item
      setDroppedBoxNames(
        update(droppedBoxNames, name ? { $push: [name] } : { $push: [] }),
      )
      setContainers(
        update(containers, {
          [index]: {
            lastDroppedItem: {
              $set: item,
            },
          },
        }),
      )
    },
    [droppedBoxNames, containers],
  )


  return (
    <>
      <div className="Pictures shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800">
        {resourcePool.map((item) => {
          // return <Picture url={PictureList[item.tag[0]]} id={item.id} name={item.name} description={item.description} isDropped={isDropped(item.name)}/>;
          return <Box
            name={item.name}
            type={item.type}
            isDropped={isDropped(item.name)}
            key={item.index}
          />
        })}
      </div>
      <br /><hr /><br />
      <div className="drop-box shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800">
        {/* {board.map((item) => {
          return <Picture url={PictureList[item.tag[0]]} id={item.id} name={item.name} description={item.description}/>;
        })} */}
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          {containers.map(({ accepts, lastDroppedItem }, index) => (
            <Container
              accept={accepts}
              lastDroppedItem={lastDroppedItem}
              onDrop={(item) => handleDrop(index, item)}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default DragDrop;