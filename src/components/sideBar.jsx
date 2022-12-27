import React from 'react'

export default function SideBar({ data }) {
    let list = data.map((item, i) => (<li>
        <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            {i + 1}.
            <span className="ml-3"> {item.name} </span>
        </a>
    </li>))

    return (
        <div className=' custom-sidebar absolute top-10 px-3 bg-gray-50 h-screen'>
            <aside className="w-64" aria-label="Sidebar">
                <div className="overflow-y-auto h-full py-4  rounded dark:bg-gray-800">
                    <ul className="space-y-2">
                        {list}
                    </ul>
                </div>
            </aside>
        </div>);
}
