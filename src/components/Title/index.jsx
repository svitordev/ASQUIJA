import React from 'react'

export const Title = ({children, center}) => {
  return (
    <div className={`flex-col ${center && ("items-center text-center")} inline-flex w-full`}>
        <h1 className='text-2xl xl:text-3xl text-primary-2 font-bold font-serif leading-none'>{children}</h1>
        {children && (
            <div className='w-16 md:w-20 h-1 rounded-full bg-terciary-1'></div>
        )}
    </div>
    
  )
}
