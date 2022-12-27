import React, { useState } from "react";

export default Track() {
    return (
        <div className="norm">
        <Navbar />
        <div className="pane top-pane pt-10">
            <SplitPane className="split-pane-row">
                <SplitPaneLeft>
                    <ProblemStatement problem={problem}/>
                </SplitPaneLeft>
                <Divider id="divider-left" className="separator-col" />
                <SplitPaneMid>
                    <Board />
                </SplitPaneMid>
                <Divider id="divider-right" className="separator-col" />
                <SplitPaneRight>
                    <Results data={result}/>
                </SplitPaneRight>
            </SplitPane>
        </div>
        </div>
    )
}