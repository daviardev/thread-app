import Logo from './Icons/Logo'

import { useTheme } from '../context/ThemeContext'

export default function Header () {
  const { toggleTheme } = useTheme()

  return (
    <>
      <header className='flex py-7 justify-center pt-[4.6rem] w-screen flex-col items-center'>
        <button className='w-[24px] h-[24px]' onClick={toggleTheme}>
          <span>
            <Logo />
          </span>
        </button>
      </header>
    </>
  )
}
