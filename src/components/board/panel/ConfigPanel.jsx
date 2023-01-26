import React, { useState } from 'react'
import { RadioInput } from './RadioInput'

function ConfigPanel({resourcePool, selectedResource, setConfig, config}) {
 return ( selectedResource >=0 &&
   <div className='grid w-90 gap-3 md:grid-cols-3 h-40 m-2'>
      {resourcePool[selectedResource].config.map((item) => {
         const type = item.type
         return <RadioInput label={type} options={item.options} updateSelection={(value) => {setConfig(type, value)}} valueFromConfig={ config?.[type]}/>
      })}
   </div>
 )
}

export default ConfigPanel;