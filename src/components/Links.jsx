import { useState } from 'react'

import Dots from './Icons/Dots'
import Modal from './Modal'
import Instagram from './Icons/Instagram'

export default function Likes ({ user }) {
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
        <a className='hover:underline flex items-center flex-shrink-0 restart-positions name-subtitle'>
          {user.followers.length} seguidores
        </a>
        <div className='min-w-0 flex-grow flex items-center'>
          <span className='pr-1.5 inline-block pl-1.5 restart-positions name-subtitle'>
            ·
          </span>
          <a className='min-w-0 restart-positions name-subtitle' href={user.github_url}>
            <span className='hover:underline w-full block overflow-hidden text-ellipsis whitespace-nowrap'>
              {user.github_url.replace('https://', '')}
            </span>
          </a>
        </div>
        <div className='flex items-center ml-4 flex-grow-0'>
          <a>
            <button className='icon-container restart-positions'>
              <Instagram />
            </button>
          </a>
          <button className='icon-container cursor-pointer' onCLick={handleOpen}>
            <div className='restart-positions'>
              <Dots />
            </div>
          </button>
          <Modal user={user} isOpen={isOpen}>
            Copiar enlace
          </Modal>
        </div>
      </section>
    </>
  )
}
