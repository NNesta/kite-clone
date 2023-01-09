import React from 'react'

const Wrapper = ({children, styles}) => {
  return (
    <div className={`max-w-[1620px] p-5 mx-auto ${styles}`}>
     {children}
    </div>
  )
}

export default Wrapper