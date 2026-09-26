import React from 'react'
import { useParams } from 'react-router-dom'

const CoursesDetails = () => {

    const params = useParams()
    console.log(params);

    return (

        <div>{params.id}   CoursesDetails</div>
    )
}

export default CoursesDetails