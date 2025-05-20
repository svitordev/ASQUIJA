import React from 'react'

export const Tag = ({children}) => {
  return (
    <div className='block self-start'>
      <span className='flex max-w-fit gap-2 items-center text-xs text-primary-2 bg-secundary-3 py-1 px-2 rounded-full'>
        {children}
    </span>
    </div>
    
  )
}
