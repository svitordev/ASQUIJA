import React from 'react'

export const TopTitle = ({children, subTitle, parag}) => {
  return (
    <div
        id="sobre"
        className="home w-full  h-52 lg:h-60 xl:h-64 flex flex-col items-center justify-center gap-2  text-center"
      >
        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-sans font-bold">
          {children}
        </h1>
        {subTitle &&(<p className='text-primary-1 text-xl'>{subTitle}</p>)}
        {parag &&(<p className='text-xl text-white w-11/12 md:w-4/5 lg:w-3/5 xl:w-1/2'>{parag}</p>)}
      </div>
  )
}
