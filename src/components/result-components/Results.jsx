
import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt } from '@fortawesome/free-solid-svg-icons'
import Guage from './Guage'
import ExploreDashboard from './ExploreDashboard'
import GlobalContext from '../Context'
import {decode, encode} from 'base-64';

function Results({data, notBlurResult}) {
    const {config} = useContext(GlobalContext)
    console.log(JSON.stringify(config))
    console.log(encode(JSON.stringify(config)))
    return (
        <div className='board'>
            <div className="editor-title">
                Results
                <FontAwesomeIcon
                    icon={faCompressAlt}
                />
            </div>
            <div className={((notBlurResult==0) && 'blur-md' || null) + ' board-area relative'}>
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
                <h6 class="mb-6 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white">
                    Detailed <mark class="px-1 text-white bg-indigo-600 rounded dark:bg-indigo-500">Explaination</mark></h6>
                <blockquote class="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
                
                    <p class="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                </blockquote>
                {data.dashboardLink && <ExploreDashboard link={data.dashboardLink} /> || null}
            </div>
        </div>
    )
}

export default Results