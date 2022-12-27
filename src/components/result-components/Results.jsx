
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt } from '@fortawesome/free-solid-svg-icons'
import Guage from './Guage'
import ExploreDashboard from './ExploreDashboard'

function Results({data, blurResult}) {
    return (
        <div className='board'>
            <div className="editor-title">
                Results
                <FontAwesomeIcon
                    icon={faCompressAlt}
                />
            </div>
            <div className={(blurResult && 'blur-md' || null) + ' board-area relative'}>
                <div className='flex flex-wrap'>
                    {data.latencyP95 &&
                    <div className='latency-guage m-2 w-48 h-30'>
                        <Guage label="Latency (P95)" value={data.latencyP95} formatText={(value) => value + 'ms'} />
                    </div> || null}
                    {data.throughput &&
                    <div className='latency-guage m-2 w-48 h-30'>
                        <Guage label="Req handled per sec" value={data.throughput} formatText={(value) => value + 'k'} />
                    </div> || null}
                    {data.cpuBusy &&
                    <div className='latency-guage m-2 w-48 h-30'>
                        <Guage label="CPU Busy" value={data.cpuBusy} />
                    </div> || null}
                    {data.ramUsed &&
                    <div className='latency-guage m-2 w-48 h-30'>
                        <Guage label="RAM Used" value={0.14} />
                    </div> || null}
                    {data.load5m &&
                    <div className='latency-guage m-2 w-48 h-30'>
                        <Guage label="Load (5m)" value={0.14} />
                    </div> || null}
                    {data.swapUsed &&
                    <div className='latency-guage m-2 w-48 h-30'>
                        <Guage label="SWAP Used" value={0} />
                    </div> || null}
                </div>
                {data.dashboardLink && <ExploreDashboard link={data.dashboardLink} /> || null}
            </div>
        </div>
    )
}

export default Results