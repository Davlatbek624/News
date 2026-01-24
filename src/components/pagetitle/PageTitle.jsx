import React , { useEffect } from 'react'
import { useLocation } from 'react-router-dom' 

export default function PageTitle({ title }) {
    useEffect(() => {
        document.title = title
    }, [title])
    return (
        null
    )
}
