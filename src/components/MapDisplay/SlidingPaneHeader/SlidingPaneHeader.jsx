import React from 'react'

const SlidingPaneHeader = ({ currentMarker }) => {
    return (
        <div className='mb-4 p-4 border-b border-gray-200'>
            <h1 className='text-2xl font-semibold text-gray-800 mb-1'>
                {currentMarker.name}
            </h1>
            <p className='text-gray-600 text-sm'>
                {currentMarker.description}
            </p>
        </div>

    )
}

export default SlidingPaneHeader