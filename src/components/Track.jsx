import React, {useState, useEffect} from 'react'
import SplitPane, {
    Divider,
    SplitPaneLeft,
    SplitPaneMid,
    SplitPaneRight,
} from "./splitspane/SplitPane";
import Board from './board/Board'
import Results from './result-components/Results'
import Navbar from './Navbar'
import ProblemStatement from './ProblemStatement'

export default function Track({ result, resourcePool, problemStatement}) {

    const [onRun, increaseRun] = useState(0);

    useEffect(() => {
        increaseRun(0)
    }, [problemStatement])

    return (
            <div className="pane top-pane pt-10">
                <SplitPane className="split-pane-row">
                    <SplitPaneLeft>
                        <ProblemStatement problem={problemStatement} />
                    </SplitPaneLeft>
                    <Divider id="divider-left" className="separator-col" />
                    <SplitPaneMid>
                        <Board resourcePool={resourcePool} onRunTest={()=>{increaseRun(onRun+1)}} />
                    </SplitPaneMid>
                    <Divider id="divider-right" className="separator-col" />
                    <SplitPaneRight>
                        <Results data={result} notBlurResult={onRun}/>
                    </SplitPaneRight>
                </SplitPane>
            </div>
    )
}