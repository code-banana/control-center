import React, { useState } from 'react'
import { RadioInput } from './RadioInput'

function ConfigPanel({resourcePool, selectedResource, setConfig, config}) {
   console.log("config", config)
 return ( selectedResource >=0 &&
   <div className='h-36 m-2'>
      {resourcePool[selectedResource].config.map((item) => {
         const type = item.type
         return <RadioInput label={type} options={item.options} updateSelection={(value) => {setConfig(type, value)}} valueFromConfig={ config?.[type]}/>
      })}
   </div>
 )
}

export default ConfigPanel;