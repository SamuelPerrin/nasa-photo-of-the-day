import React from 'react'
import Details from './Details.js'

export default function Image(props) {
    const { url, hdurl, title, explanation } = props;

    return (
        <div>
            <img src={url} alt='Nasa photo of the day'/>
            <Details hdurl={hdurl} title={title} explanation={explanation} />
        </div>
    )
}