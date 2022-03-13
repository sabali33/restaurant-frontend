import React from 'react'

export const CenteredModal = (props) => {
    return (
        <div className='w-2/3 mx-auto bg-gray-200 text-center py-20'>
            {props.children}
        </div>
    )
}
