import React from 'react'
import '../styles.css'

const Report = () => {
    const pri = () => {
        window.print()
    }

    const main = () => {
        return (
            <div>
                <p>This page is printed.</p>
            </div>
        )
    }
    return (
        <div>
            {main()}
            <button type="button" onClick={pri} className="noprint btn btn-primary">Download</button>
        </div>
    )
}

export default Report
