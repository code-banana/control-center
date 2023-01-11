import React, { useState, useEffect } from 'react'
import { InputRange } from './InputRange'
import Button from './Button'
import ConfigPanel from './ConfigPanel'

function Panel({onRunTest, resourcePool}) {
    const concurrentUser = [1, 10, 100, 1000, 10000, 100000]
    const [isVisible, setVisibility] = useState(true)
    const [selectedPanel, setSelectedPanel] = useState(1)
    return (
        <div className='absolute left-0 right-0  bottom-2 bg-stone-100'>
            <div className='h-6 bg-indigo-500 flex flex-row-reverse px-8 justify-between'>
                <button onClick={() => { setVisibility(!isVisible) }}>
                    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" ariaHidden="true">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                </button>
                <div className='flex flex-row'>
                    <button className= {'mr-4 '+(selectedPanel == 0 ? ' underline font-bold' : null)} onClick={() => setSelectedPanel(0)}>Test</button>
                    <button className={selectedPanel == 1 ? 'underline font-bold' : null} onClick={() => setSelectedPanel(1)}>Config</button>
                </div>
            </div>
             {isVisible && selectedPanel == 0?
             (<div className='relative m-2 h-36'>
                <Button className="bg-green-600 right-8 top-2 absolute" onClick={onRunTest}>RUN</Button>
                <div className='w-2/3 mt-2'>
                    <InputRange range={concurrentUser} label="Concurrency" unit="users" onChange={() => { }} />
                </div>
                <div className='w-2/3 mt-4'>
                    <InputRange range={concurrentUser} label="Time" unit="min" onChange={() => { }} />
                </div>
            </div>
             ): (isVisible && selectedPanel == 1?
                <ConfigPanel resourcePool={resourcePool}  />
                : null)             
          }
        </div>
    )
}

export default Panel