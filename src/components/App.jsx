import React, { useState, useEffect } from 'react'
import Editor from './Editor'
import UseLocalStorage from '../hooks/UseLocalStorage'
import Fullscreen from 'fullscreen-react'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt } from '@fortawesome/free-solid-svg-icons'
import Board from './Board'
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
            <Navbar/>

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
                <Board/>
                <div className='board'>
                        <div className="editor-title">
                        Results
                                <FontAwesomeIcon
                                    icon={faCompressAlt}
                                />
                        </div>
                        <div className='board-area'>
                            
<div class="shadow-lg rounded-2xl w-36 p-4 bg-white dark:bg-gray-800">
    <div class="flex items-center">
        <span class="bg-green-500 p-2 h-4 w-4 rounded-full relative">
            <svg width="20" fill="currentColor" height="20" class="text-white h-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z">
                </path>
            </svg>
        </span>
        <p class="text-md text-gray-700 dark:text-gray-50 ml-2">
            Latency
        </p>
    </div>
    <div class="flex flex-col justify-start">
        <p class="text-gray-800 text-4xl text-left dark:text-white font-bold my-4">
            36ms
        </p>
        <div class="relative w-28 h-2 bg-gray-200 rounded">
            <div class="absolute top-0 h-2  left-0 rounded bg-green-500 w-2/3">
            </div>
        </div>
    </div>
</div>


<br></br>

<div class="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800">
    <div class="flex items-center">
        <span class="rounded-xl relative p-4 bg-purple-200">
            <svg width="40" fill="currentColor" height="40" class="text-purple-500 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z">
                </path>
            </svg>
        </span>
        <p class="text-md text-black dark:text-white ml-2">
            Finance
        </p>
    </div>
    <div class="flex flex-col justify-start">
        <p class="text-gray-700 dark:text-gray-100 text-4xl text-left font-bold my-4">
            34,500
            <span class="text-sm">
                $
            </span>
        </p>
        <div class="flex items-center text-green-500 text-sm">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z">
                </path>
            </svg>
            <span>
                5.5%
            </span>
            <span class="text-gray-400">
                vs last month
            </span>
        </div>
    </div>
</div>

<br/><br/>

<div class="shadow-lg rounded-2xl px-4 py-6 w-full bg-white dark:bg-gray-800 relative">
    <p class="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
        Project Reffered
    </p>
    <div class="flex items-end space-x-2 my-6">
        <p class="text-5xl text-black dark:text-white font-bold">
            12
        </p>
        <span class="text-green-500 text-xl font-bold flex items-center">
            <svg width="20" fill="currentColor" height="20" className="h-3" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z">
                </path>
            </svg>
            22%
        </span>
    </div>
    <div className="dark:text-white">
        <div className="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
            <p>
                Unique refferal URL
            </p>
            <div className="flex items-end text-xs">
                34
                <span className="flex items-center">
                    <svg width="20" fill="currentColor" height="20" className="h-3 text-green-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z">
                        </path>
                    </svg>
                    22%
                </span>
            </div>
        </div>
        <div className="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
            <p>
                Embedded form
            </p>
            <div className="flex items-end text-xs">
                13
                <span className="flex items-center">
                    <svg width="20" fill="currentColor" height="20" className="h-3 text-green-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z">
                        </path>
                    </svg>
                    12%
                </span>
            </div>
        </div>
        <div className="flex rounded-2xl items-center text-sm space-x-12 md:space-x-24 justify-between">
            <p>
                New visitor
            </p>
            <div className="flex items-end text-xs">
                45
                <span className="flex items-center">
                    <svg width="20" fill="currentColor" height="20" className="h-3 text-green-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z">
                        </path>
                    </svg>
                    41%
                </span>
            </div>
        </div>
    </div>
</div>


                        </div>
                    </div>
                </div>
               
            </div>
        </>
    )
}

export default App
