import React from 'react'

const Label = ({label = "", className="font-bold"}) => {
  return (
    <div>
        <label className={className}>{label}</label>
    </div>
  )
}

export default Label