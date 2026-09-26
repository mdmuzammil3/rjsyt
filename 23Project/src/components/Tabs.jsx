import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux/features/searchSlice'

const Tabs = () => {

    const tabs = ['photos', 'videos', 'gif']
    const dispatch = useDispatch()
    const activeTab = useSelector((state) => state.search.activeTab)

    return (
        <div className='flex gap-5 p-10 justify-center'>
            {tabs.map(function (elem, idx) {
                return (
                    <button className={`${(activeTab == elem ? 'bg-blue-700' : 'bg-gray-500')}  cursor-pointer active:scale-90 py-2 px-5 rounded uppercase`}
                        key={idx}
                        onClick={() => { dispatch(setActiveTab(elem)) }}
                    >
                        {elem}
                    </button>
                )
            })}
        </div>
    )
}

export default Tabs