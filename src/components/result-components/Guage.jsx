
import React from 'react'
import GaugeChart from 'react-gauge-chart'

function Guage({value, label, formatText, hidePercent}) {
    const formatTextValue = formatText || ((value) => value+'%')
    return (
    <div className='bg-gray-800 m-1'>
        <div className='text-center text-slate-300 font-bold'>{label}</div>
        <GaugeChart id="gauge-chart4" 
        nrOfLevels={10} 
        arcPadding={0.05} 
        cornerRadius={2} 
        percent={value}
        hideText={hidePercent}
        formatTextValue={formatTextValue}
        />
    </div>
    )
}

export default Guage