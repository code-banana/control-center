import React, {
    createRef,
    useContext,
    useEffect,
    useRef,
    useState,
  } from "react";
  import SplitPaneContext from "./SplitPaneContext";
  
  const SplitPane = ({ children, ...props }) => {
    const screenWidth = document.getElementById("root").offsetWidth
    const [clientHeight, setClientHeight] = useState(null);
    const [clientWidth, setClientWidth] = useState(screenWidth/4);
    const [rightClientWidth, setRightClientWidth] = useState(screenWidth/4);
    const [midClientWidth, setMidClientWidth] = useState(screenWidth/2);
    const yDividerPos = useRef(null);
    const xDividerPos = useRef(null);
    const [whichDivider, setWhichDivider] = useState(null);
  
    const onMouseHoldDown = (e) => {
      yDividerPos.current = e.clientY;
      xDividerPos.current = e.clientX;
      if(e.target.id=="divider-right" || e.target.id=="divider-left") {
        setWhichDivider(e.target.id)
      }

    };
  
    const onMouseHoldUp = () => {
      yDividerPos.current = null;
      xDividerPos.current = null;
    };
  
    const onMouseHoldMove = (e) => {
      if (!yDividerPos.current && !xDividerPos.current) {
        return;
      }


      if( whichDivider == "divider-right") {
        setRightClientWidth(rightClientWidth - e.clientX + xDividerPos.current);
        setMidClientWidth(midClientWidth + e.clientX - xDividerPos.current);
      }
      else if( whichDivider == "divider-left") {
        setClientWidth(clientWidth + e.clientX - xDividerPos.current);
        setMidClientWidth(midClientWidth - e.clientX + xDividerPos.current);
      }
  
     // setClientHeight(clientHeight + e.clientY - yDividerPos.current);
      yDividerPos.current = e.clientY;
      xDividerPos.current = e.clientX;
    };
  
    useEffect(() => {
      document.addEventListener("mouseup", onMouseHoldUp);
      document.addEventListener("mousemove", onMouseHoldMove);
  
      return () => {
        document.removeEventListener("mouseup", onMouseHoldUp);
        document.removeEventListener("mousemove", onMouseHoldMove);
      };
    });
  
    return (
      <div {...props}>
        <SplitPaneContext.Provider
          value={{
            clientHeight,
            setClientHeight,
            clientWidth,
            setClientWidth,
            onMouseHoldDown,
            rightClientWidth,
            setRightClientWidth,
            midClientWidth,
            setMidClientWidth
          }}
        >
          {children}
        </SplitPaneContext.Provider>
      </div>
    );
  };

  export const Divider = (props) => {
    const { onMouseHoldDown } = useContext(SplitPaneContext);
  
    return <div {...props} onMouseDown={onMouseHoldDown} />;
  };
  
  export const SplitPaneTop = ({children, ...props}) => {
    const topRef = createRef();
    const { clientHeight, setClientHeight } = useContext(SplitPaneContext);
  
    useEffect(() => {
      if (!clientHeight) {
        setClientHeight(topRef.current.clientHeight);
        return;
      }
  
      topRef.current.style.minHeight = clientHeight + "px";
      topRef.current.style.maxHeight = clientHeight + "px";
    }, [clientHeight]);
  
    return <div {...props} className="split-pane-left" ref={topRef}> {children} </div>;
  };
  
  export const SplitPaneBottom = ({children, ...props}) => {
    return <div {...props} className="split-pane-bottom"> {children} </div>;
  };
  
  export const SplitPaneRight = ({children, ...props}) => {
    const topRef = createRef();
    const { rightClientWidth, setRightClientWidth } = useContext(SplitPaneContext);
  
    useEffect(() => {
      if (!rightClientWidth) {
        setRightClientWidth(topRef.current.clientWidth);
        return;
      }
  
      topRef.current.style.minWidth = rightClientWidth + "px";
      topRef.current.style.maxWidth = rightClientWidth + "px";
    }, [rightClientWidth]);
  
    return <div {...props} className="split-pane-right" ref={topRef}> {children} </div>;
  };

  export const SplitPaneLeft = ({children, ...props}) => {
    const topRef = createRef();
    const { clientWidth, setClientWidth } = useContext(SplitPaneContext);
  
    useEffect(() => {
      if (!clientWidth) {
        setClientWidth(topRef.current.clientWidth);
        return;
      }
  
      topRef.current.style.minWidth = clientWidth + "px";
      topRef.current.style.maxWidth = clientWidth + "px";
    }, [clientWidth]);
  
    return <div {...props} className="split-pane-left" ref={topRef}> {children} </div>;
  };
  
  export const SplitPaneMid = ({children, ...props}) => {
    const topRef = createRef();
    const { midClientWidth, setMidClientWidth } = useContext(SplitPaneContext);
    useEffect(() => {
      if (!midClientWidth) {
        setMidClientWidth(topRef.current.clientWidth);
        return;
      }
  
      topRef.current.style.minWidth = midClientWidth + "px";
      topRef.current.style.maxWidth = midClientWidth + "px";
    }, [midClientWidth]);
    return <div {...props} ref={topRef}> {children} </div>;
  };
  
  export default SplitPane;