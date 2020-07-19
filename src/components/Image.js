import React from 'react'

function Image(props) {
    console.log('Image -->', props)
    return(
        <div>
            <img src={props.photo} alt = "NASA"/>
        </div>
    )
}

export default Image;