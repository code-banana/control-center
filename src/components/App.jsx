import React, { useState, useEffect } from 'react'
import Editor from './Editor'
import UseLocalStorage from '../hooks/UseLocalStorage'
import Fullscreen from 'fullscreen-react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt } from '@fortawesome/free-solid-svg-icons'
import Board from './Board'
import Results from './Results'
import Navbar from './Navbar'

function App() {
    const [html, setHtml] = UseLocalStorage('html', '')
    const [javascript, setJavascript] = UseLocalStorage('javascript', '')
    const [srcDoc, setSrcDoc] = useState('')
    const [isEnter, setIsEnter] = useState(false)


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

                <div className="pane top-pane">
                    <div className='board'>
                        <div className="editor-title">
                            Description
                            <FontAwesomeIcon
                                icon={faCompressAlt}
                            />
                        </div>
                        <div className='board-area lead'>
                            <img src='https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png'></img>
                            <p className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                                Learn how to think like a developer and build any project you can dream of by taking action instead of just following along with tutorials.
                            </p>
                        </div>
                    </div>
                    <Board />
                    <Results />
                </div>
            </div>
        </>
    )
}

export default App
