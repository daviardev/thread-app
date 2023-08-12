import Logo from './Icons/Logo'

export default function Header () {
  return (
    <>
      <header className='flex justify-center items-center h-[74px] w-full'>
        <button className='w-[24px] h-[24px]'>
          <span>
            <Logo />
          </span>
        </button>
      </header>
    </>
  )
}
