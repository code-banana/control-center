import React, {useState} from 'react'
import Navbar from './Navbar'
import SideBar from './sideBar'
import Track from './Track'
import {GlobalContextProvider} from './Context'

function Banana() {
    const data = require("../track/c10k/c10k.js")
    const [isSideBarOpen, toggleSideBar] = useState(false);
    const [problemNumber, setProblemNumber] = useState(-1);
    return (
        <GlobalContextProvider>
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
            <div>
                <Navbar toggleSideBar={() => {toggleSideBar(!isSideBarOpen)}}/>
                {isSideBarOpen && <SideBar data={data.problems} onSelect={setProblemNumber} toggle={toggleSideBar}/> || null}
                {problemNumber <0 && <div className='pt-9 h-screen bg-[#0f111a]'> <div className="board-area" dangerouslySetInnerHTML={ {__html: data.homePageHtml}} /></div> || null}
                {problemNumber == 0 && <Track {...data.problems[0]} /> || null}
                {problemNumber == 1 && <Track {...data.problems[1]} /> || null}
                {problemNumber == 2 && <Track {...data.problems[2]} /> || null}
            </div>
        </GlobalContextProvider>
    )
}

export default Banana
