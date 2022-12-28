import React from 'react'

function ExploreDashboard({link}) {
    return (
        <a className=' border-2 border-slate-700 text-slate-300 bg-gray-800 h-10 p-2 absolute bottom-4 right-4 font-bold' href={link}>{"Click to view Dashboard ->"}</a>
    )
}

export default ExploreDashboard;