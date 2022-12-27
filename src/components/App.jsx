import React, {useState} from 'react'
import Navbar from './Navbar'
import SideBar from './sideBar'
import Track from './Track'

function App() {
    const data = require("../track/c10k/c10k.js")
    const [isSideBarOpen, toggleSideBar] = useState(false);

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
            <div>
                <Navbar toggleSideBar={() => {toggleSideBar(!isSideBarOpen)}}/>
                {isSideBarOpen && <SideBar data={data}/> || null}
                    <br/><br/><br/><br/><br/><br/><br/><br/>
                    <div className="text-center"> C10k Track details </div> 
            </div>
        </>
    )
}

export default App
