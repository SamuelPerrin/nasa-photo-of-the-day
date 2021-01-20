import React from 'react'

export default function Details(props) {
    const { title, hdurl, explanation } = props;

    return (
        <div>
            <a href={hdurl}>{title}</a>
            <p>{explanation}</p>
        </div>
    )
}