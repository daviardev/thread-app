import { useState } from 'react'

import Dots from './Icons/Dots'
import Modal from './Modal'
import Instagram from './Icons/Instagram'

export default function Likes () {
  const [isOpen, setIsOpen] = useState()

  const handleOpen = () => {
    setIsOpen(prev => !prev)
  }

  const handleClose = e => {
    e.target.closest() && setIsOpen()
  }
  return (
    <>
      <section className='mt-[18px] min-h-[22px] flex items-center' onClick={handleClose}>
        <a className='flex items-center flex-shrink-0 restart-positions name-subtitle'>
          241 seguidores
        </a>
        <div className='min-w-0 flex-grow flex items-center'>
          <span className='pr-1.5 inline-block pl-1.5 restart-positions name-subtitle'>
            ·
          </span>
          <a className='min-w-0 restart-positions name-subtitle' href='https://www.udemy.com/course/python-django-2021-complete-course/'>
            <span className='w-full block overflow-hidden text-ellipsis whitespace-nowrap'>
              udemy.com/course/python-django-2021-complete-course/
            </span>
          </a>
        </div>
        <div className='flex items-center ml-4 flex-grow-0'>
          <a>
            <button className='restart-positions'>
              <Instagram />
            </button>
          </a>
          <div className='ml-4' />
          <button className='cursor-pointer' onCLick={handleOpen}>
            <div className='restart-positions'>
              <Dots />
            </div>
          </button>
          <Modal isOpen={isOpen}>
            Copiar enlace
          </Modal>
        </div>
      </section>
    </>
  )
}
