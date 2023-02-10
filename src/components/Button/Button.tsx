import React from 'react'
import './button.css'
import '../../../dist/output.css'

function Button({variant}:{variant:string}) {
  return (
    <div className={
        `
        btn ${variant}
        w-20 text-center rounded px-3 py-2 text-white
        `
    }>
        Button
    </div>
  )
}

export default Button