import React, { useState, useEffect, useContext } from 'react'
import { RadioInput } from './RadioInput'
import GlobalContext from '../../Context'

function ConfigPanel({resourcePool, selectedResource}) {
   const [resource, setResource] = useState(0)
   let initialState = {}
   resourcePool[0].config.map((item) => initialState[item.type]= -1)
   const {config, setConfig} = useContext(GlobalContext)
   
   useEffect(() => {
      setConfig(initialState)
   },[])
   

 return (
   <div className='h-36 m-2'>
      {resourcePool[resource].config.map((item) => {
         const type = item.type
         return <RadioInput label={type} options={item.options} defaultSelection={-1} updateSelection={(value) => {setConfig({...config, [type] : value})}}/>
      })}
   </div>
 )
}

export default ConfigPanel;