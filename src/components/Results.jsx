
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt } from '@fortawesome/free-solid-svg-icons'
import Guage from './result-components/Guage'
import ExploreDashboard from './result-components/ExploreDashboard'

function Results() {
    return (
        <div className='board'>
            <div className="editor-title">
                Results
                <FontAwesomeIcon
                    icon={faCompressAlt}
                />
            </div>
            <div className='board-area relative'>
                <div className='flex flex-wrap'>
                    <div className='latency-guage m-2 w-48 h-30'>
                        <Guage label="Latency (P95)" value={0.3} formatText={(value) => value + 'ms'} />
                    </div>
                    <div className='latency-guage m-2 w-48 h-30'>
                        <Guage label="Req handled per sec" value={0.14} formatText={(value) => value + 'k'} />
                    </div>
                    <div className='latency-guage m-2 w-48 h-30'>
                        <Guage label="CPU Busy" value={0.6} />
                    </div>
                    <div className='latency-guage m-2 w-48 h-30'>
                        <Guage label="RAM Used" value={0.14} />
                    </div>
                    <div className='latency-guage m-2 w-48 h-30'>
                        <Guage label="Load (5m)" value={0.14} />
                    </div>
                    <div className='latency-guage m-2 w-48 h-30'>
                        <Guage label="SWAP Used" value={0} />
                    </div>
                </div>
                <ExploreDashboard link='yo' />
            </div>
        </div>
    )
}

export default Results