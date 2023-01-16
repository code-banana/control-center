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
            <div className='h-6 bg-indigo-500 flex flex-row-reverse px-8 justify-between'>
                <button onClick={() => { setVisibility(!isVisible) }}>
                    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" ariaHidden="true">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                </button>
                <div className='flex flex-row'>
                    <button className={'mr-4 '+(selectedPanel == 1 ? 'underline font-bold' : null)} onClick={() => setSelectedPanel(1)}>Config</button>
                    <button className= {(selectedPanel == 0 ? ' underline font-bold' : null)} onClick={() => {setSelectedPanel(0); onTestPanel()}}>Test</button> 
                </div>
            </div>
             {(isVisible && selectedPanel == 1?
                <ConfigPanel resourcePool={resourcePool} selectedResource={selectedResource} config={config} setConfig={(type, value) => {setConfig({...config, [type] : value})}}/>
                : isVisible && selectedPanel == 0?
                (<div className='relative m-2 h-36'>
                   <Button className="bg-green-600 right-8 top-2 absolute" onClick={() => {onRunTest()}}>RUN</Button>
                   <div className='w-2/3 mt-2'>
                       <InputRange range={concurrentUser} label="Concurrency" unit="users" setConfig={(type, value) => {setConfig({...config, [type] : value})}} />
                   </div>
                   <div className='w-2/3 mt-4'>
                       <InputRange range={[1,2,3,4,5,6,7,8,9,10]} label="Time" unit="min" setConfig={(type, value) => {setConfig({...config, [type] : value})}} />
                   </div>
               </div>
                ) : null)             
          }
        </div>
    )
}

export default Panel