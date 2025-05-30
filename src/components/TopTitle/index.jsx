import React from 'react'

export const TopTitle = ({children}) => {
  return (
    <div
        id="sobre"
        className="home w-full h-24 md:h-36 lg:h-44 flex flex-col items-center justify-center gap-6 lg:gap-12 text-center"
      >
        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-sans font-bold">
          {children}
        </h1>
      </div>
  )
}
