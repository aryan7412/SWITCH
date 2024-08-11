import React from 'react'
import { IoIosQuote } from "react-icons/io";

const ClientSlider = (props) => {
    const { name, position, img_url, disc } = props.item;
    return (
        <div className="bg-gradient-to-br from-slate-50 via-white to-white p-6 mx-4 border border-black">
            <div className="flex items-center justify-between mb-4">
                <span className="text-4xl text-blue-800 opacity-70"><IoIosQuote /></span>
            </div>
            <p className="text-sm mb-6">
                {disc}
            </p>
            <div className="flex items-center gap-4">
                <img src={img_url} alt={name} className="w-16 h-16 rounded-full object-cover" />
                <div className="details">
                    <h1 className="text-lg font-bold">{name}</h1>
                    <p className="text-xs text-gray-400">{position}</p>
                </div>
            </div>
        </div>
    )
}

export default ClientSlider