import React, { useEffect, useState } from 'react'

const SpLoader = () => {

    const [showSpinner, setShowSpinner] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setShowSpinner(false);
        }, 3000)
    }, [])

    return (
        <div className='spinner-container'>
            {showSpinner && <img src="./spinner.gif" alt="" />}
        </div>
    )
}

export default SpLoader