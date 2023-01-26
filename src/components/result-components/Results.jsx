
import React, { useContext, useMemo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt } from '@fortawesome/free-solid-svg-icons'
import Guage from './Guage'
import ExploreDashboard from './ExploreDashboard'
import GlobalContext from '../Context'
import { decode, encode } from 'base-64';

function Results({ notBlurResult }) {
    const resultJson = require("../../track/c10k/result.js")
    const {config} = useContext(GlobalContext)
    const result = useMemo(()=>resultJson[encode(JSON.stringify(config))], [notBlurResult])
    console.log(result, config)
    const component = useMemo(() => {
        return         (<div className='board'>
        <div className="editor-title">
            Results
            <FontAwesomeIcon
                icon={faCompressAlt}
            />
        </div>
        <div className={((notBlurResult == 0) && 'blur-md' || null) + ' board-area relative'}>
            <div className='flex flex-wrap'>
                {result.latencyP95 &&
                    <div className='latency-guage m-2 w-48 h-30'>
                        <Guage label="Latency (P95)" value={result.latencyP95} formatText={(value) => value + 'ms'} />
                    </div> || null}
                {result.throughput &&
                    <div className='latency-guage m-2 w-48 h-30'>
                        <Guage label="Req handled per sec" value={result.throughput} formatText={(value) => value + 'k'} />
                    </div> || null}
                {result.cpuBusy &&
                    <div className='latency-guage m-2 w-48 h-30'>
                        <Guage label="CPU Busy" value={result.cpuBusy} />
                    </div> || null}
                {result.ramUsed &&
                    <div className='latency-guage m-2 w-48 h-30'>
                        <Guage label="RAM Used" value={result.ramUsed} formatText={(value) => value + 'GB'} />
                    </div> || null}
                {result.load5m &&
                    <div className='latency-guage m-2 w-48 h-30'>
                        <Guage label="Load (5m)" value={result.load5m} />
                    </div> || null}
                {result.swapUsed &&
                    <div className='latency-guage m-2 w-48 h-30'>
                        <Guage label="SWAP Used" value={0} />
                    </div> || null}
                {result.cost && <div className="bg-gray-800 ml-3 text-center text-slate-300 font-bold h-30 h-8 pt-1 m-2 w-4/5 flex justify-around"> Cost :
                    <span className=''><span className=''> {result.cost} </span></span>
                </div> || null}
            </div>
            {/* <h6 class="mb-6 text-3xl font-extrabold leading-none tracking-tight  text-white md:text-3xl lg:text-3xl dark:bg-indigo-500">
                Detailed <mark class="px-1 text-white bg-indigo-600 rounded dark:bg-indigo-500">Explaination</mark></h6> */}
            {result.note && <blockquote class=" m-2 ml-3 relative p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">

                <p class="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">{result.note}</p>
            </blockquote> || null}
            {result.dashboardLink && <ExploreDashboard link={result.dashboardLink} /> || null}
        </div>
    </div>)
    },[notBlurResult])
    return (component)
}

export default Results