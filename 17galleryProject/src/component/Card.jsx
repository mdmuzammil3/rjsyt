import React from 'react'

const Card = (props) => {


    return (
        // console.log(props)
        <a href={props.elem.url} target='_blank'>
            <div className=''>
                <div className='h-40 w-44 overflow-hidden rounded '>
                    <img className='h-40 w-44 object-cover' src={props.elem.download_url} />
                </div>
                <h2 className='text-xl'>{props.elem.author}</h2>
            </div>
        </a>

    )
}

export default Card
