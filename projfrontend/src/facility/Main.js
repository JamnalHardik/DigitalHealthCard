import React from 'react'

const Main = ({ handle, aadhar }) => {
    return (
        <div className="mb-2">
            <label className="form-label">Aadhar Number</label>
            <input type="name" value={aadhar} onChange={handle("aadhar")} className="form-control" id="aadharNumber" />
        </div>
    )
}

export default Main
