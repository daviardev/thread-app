import Dots from './Icons/Dots'
import Instagram from './Icons/Instagram'

export default function Likes () {
  return (
    <>
      <div className='mt-[18px] min-h-[22px] flex items-center'>
        <div className='flex flex-shrink-0'>
          <div className='restart-positions'>
            <div className='flex items-center'>
              <a className='restart-positions name-subtitle' style={{ lineHeight: 'calc(1.4*1em)' }}>241 seguidores</a>
            </div>
          </div>
        </div>
        <div className='min-w-0 flex-grow'>
          <div className='flex items-center'>
            <span className='pr-1.5 inline-block pl-1.5'>
              <span className='restart-positions name-subtitle' style={{ lineHeight: 'calc(1.4*1em)' }}>
                ·
              </span>
            </span>
            <div className='min-w-0'>
              <a className='restart-positions name-subtitle' href='https://www.udemy.com/course/python-django-2021-complete-course/'>
                <span className='text-[15px] w-[155px] md:w-full block overflow-hidden text-ellipsis whitespace-nowrap'>udemy.com/course/python-django-2021-comlete-course</span>
              </a>
            </div>
          </div>
        </div>
        <div className='flex items-center ml-4 flex-grow-0'>
          <button className='restart-positions name-subtitle'>
            <div className='cursor-pointer restart-positions'>
              <Instagram />
            </div>
          </button>
          <div className='ml-4' />
          <button className='restart-positions name-subtitle'>
            <div className='cursor-pointer restart-positions'>
              <Dots />
            </div>
          </button>
        </div>
      </div>
    </>
  )
}
