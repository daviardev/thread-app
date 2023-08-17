import Logo from './Icons/Logo'

import { useTheme } from '../context/ThemeContext'

export default function Header () {
  const { toggleTheme } = useTheme()

  return (
    <>
      <header className='flex py-7 justify-center pt-[1.7rem] h-[75px] w-full z-10 flex-col items-center'>
        <button className='w-[24px] h-[24px]' onClick={toggleTheme}>
          <Logo />
        </button>
      </header>
    </>
  )
}
