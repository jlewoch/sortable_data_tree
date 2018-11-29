import React from 'react'

const DragHandle = () => {
  return (
    <svg
      viewBox='0 0 70 50'
      stroke='#777673'
      strokeLinecap='round'
      fill='#777673'
      strokeLinejoin='round'
      className='handle'
    >
      <path
        d='M 10 5 l 50 0 C 70,5 70,15 60,15 l -50, 0 C 0,15 0,5 10,5
            '
      />

      <path
        d='M 10 5 l 50 0 C 70,5 70,15 60,15 l -50, 0 C 0,15 0,5 10,5
          '
        transform='translate(0 15)'
      />

      <path
        d='M 10 5 l 50 0 C 70,5 70,15 60,15 l -50, 0 C 0,15 0,5 10,5
        '
        transform='translate(0 30)'
      />
    </svg>
  )
}

export default DragHandle
