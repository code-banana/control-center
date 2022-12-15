import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt } from '@fortawesome/free-solid-svg-icons'

function ProblemStatement() {
    return (
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
    </div>)
}
export default ProblemStatement