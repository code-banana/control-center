import React from 'react'
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
    return (
            <div className="pane top-pane pt-10">
                <SplitPane className="split-pane-row">
                    <SplitPaneLeft>
                        <ProblemStatement problem={problemStatement} />
                    </SplitPaneLeft>
                    <Divider id="divider-left" className="separator-col" />
                    <SplitPaneMid>
                        <Board resourcePool={resourcePool}/>
                    </SplitPaneMid>
                    <Divider id="divider-right" className="separator-col" />
                    <SplitPaneRight>
                        <Results data={result} />
                    </SplitPaneRight>
                </SplitPane>
            </div>
    )
}