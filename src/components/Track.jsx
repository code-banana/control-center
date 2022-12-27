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

    const [blurResult, setBlurResult] = useState(true);

    useEffect(() => {
        setBlurResult(true)
    }, [problemStatement])

    return (
            <div className="pane top-pane pt-10">
                <SplitPane className="split-pane-row">
                    <SplitPaneLeft>
                        <ProblemStatement problem={problemStatement} />
                    </SplitPaneLeft>
                    <Divider id="divider-left" className="separator-col" />
                    <SplitPaneMid>
                        <Board resourcePool={resourcePool} onRunTest={()=>{setBlurResult(false)}} />
                    </SplitPaneMid>
                    <Divider id="divider-right" className="separator-col" />
                    <SplitPaneRight>
                        <Results data={result} blurResult={blurResult}/>
                    </SplitPaneRight>
                </SplitPane>
            </div>
    )
}