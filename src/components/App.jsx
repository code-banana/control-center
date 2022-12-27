import React, { useState, useEffect } from 'react'
import SplitPane, {
    Divider,
    SplitPaneBottom,
    SplitPaneLeft,
    SplitPaneMid,
    SplitPaneRight,
    SplitPaneTop,
} from "./splitspane/SplitPane";
import UseLocalStorage from '../hooks/UseLocalStorage'
import Board from './Board'
import Results from './Results'
import Navbar from './Navbar'
import ProblemStatement from './ProblemStatement'

function App() {
    const [html, setHtml] = UseLocalStorage('html', '')
    const [javascript, setJavascript] = UseLocalStorage('javascript', '')
    const [srcDoc, setSrcDoc] = useState('')
    const [isEnter, setIsEnter] = useState(false)
    const track="c10k"
    const page ="1"
    const result = require("../track/"+track+"/result-"+page+".json")
    const problem = require("../track/"+track+"/problem-"+page+".js")
    console.log(problem)
    return (
        <>
            <div className="error">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                <h1>
                    Sorry, but your screen size is too small. Try switching to a
                    screen with larger screen size
                </h1>
            </div>
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
        </>
    )
}

export default App
