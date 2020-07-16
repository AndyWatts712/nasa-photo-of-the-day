import React from 'react'

function Image(props) {
    console.log('Image -->', props)
    return(
        <div>
            <img src={props.nasaData} alt = "NASA"/>
            <img src={props.marsPhotoData} alt = "NASA"/>
        </div>
    )
}

export default Image;