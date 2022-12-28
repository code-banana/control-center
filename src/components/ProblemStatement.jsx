import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt } from '@fortawesome/free-solid-svg-icons'

function ProblemStatement({problem}) {
    return (
    <div className='board'>
        <div className="editor-title">
            Problem
            <FontAwesomeIcon
                icon={faCompressAlt}
            />
        </div>
        <div className='board-area lead' dangerouslySetInnerHTML={ {__html: problem}}>
        </div>
    </div>)
}
export default ProblemStatement