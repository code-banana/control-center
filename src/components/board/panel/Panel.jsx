import React, { useState, useEffect, useContext } from 'react'
import { InputRange } from './InputRange'
import Button from './Button'
import ConfigPanel from './ConfigPanel'
import GlobalContext from '../../Context'

function Panel({onRunTest, resourcePool, selectedResource, onTestPanel, setSelectedResource}) {
    const concurrentUser = [1, 10, 100, 1000, 10000, 100000]
    const [isVisible, setVisibility] = useState(true)
    const [selectedPanel, setSelectedPanel] = useState(0)
    const {config, setConfig} = useContext(GlobalContext)

    useEffect(() => {
        if(selectedResource == -1) {
            return;
        }
        setVisibility(true)
        setSelectedPanel(1)
    }, [selectedResource])

    useEffect(() => {
        if(selectedResource == -1 && selectedPanel == 1) {
            setSelectedResource(0)
        }
    }, [selectedPanel])

    return (
        <div className='absolute left-0 right-0  bottom-2 bg-stone-100'>
            <div className='h-8 bg-indigo-500 flex flex-row-reverse px-8 justify-between'>
                <button onClick={() => { setVisibility(!isVisible) }}>
                    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" ariaHidden="true">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                </button>
                <div className='flex items-start'>
                   <div role="tablist" aria-label="filter content by" class="flex bg-indigo-700 text-white shadow rounded">
                    <button role="tab" className={'py-2 px-3 flex items-center justify-center text-xs focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 rounded'+(selectedPanel == 1 ? 'border-4 border-white-200 border-x-white-500 font-bold' : null)} onClick={() => setSelectedPanel(1)}>Config</button>
                    <button role="tab" className={'py-2 px-3 flex items-center justify-center text-xs focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 rounded'+(selectedPanel == 1 ? null : 'border-4 border-white-200 border-x-white-500 font-bold')} onClick={() => {setSelectedPanel(0); onTestPanel()}}>Test</button> 
                    </div>
                </div>
            </div>
             {(isVisible && selectedPanel == 1?
                <ConfigPanel resourcePool={resourcePool} selectedResource={selectedResource} config={config} setConfig={(type, value) => {setConfig({...config, [type] : value})}}/>
                : isVisible && selectedPanel == 0?
                (<div className='relative m-2 h-40'>
                   <Button className="bg-green-600 right-8 top-2 absolute" onClick={() => {onRunTest()}}>RUN</Button>
                   <div className='w-2/3 mt-2'>
                       <InputRange range={concurrentUser} label="Concurrency" unit="users" setConfig={(type, value) => {setConfig({...config, [type] : value})}} />
                   </div>
                   <div className='w-2/3 mt-4'>
                       <InputRange range={[1,5,10]} label="Time" unit="min" setConfig={(type, value) => {setConfig({...config, [type] : value})}} />
                   </div>
               </div>
                ) : null)             
          }
        </div>
    )
}

export default Panel