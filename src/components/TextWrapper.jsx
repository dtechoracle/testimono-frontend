import React from 'react'

const TextWrapper = ({text}) => {
  return (
    <div className='rounded-full w-fit px-4 py-2 border shadow-blue-100 flex items-center gap-2  shadow-md'>
          <span>🎉</span>
      <h4 className='font-medium text-base text-sass-brown_black  leading-6'>{ text}</h4>
    </div>
  )
}

export default TextWrapper
