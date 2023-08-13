import Logo from './Icons/Logo'

import { useTheme } from '../context/ThemeContext'

export default function Header () {
  const { toggleTheme } = useTheme()

  return (
    <>
      <header className='flex justify-center items-center h-[74px] w-full'>
        <button className='w-[24px] h-[24px]' onClick={toggleTheme}>
          <span>
            <Logo />
          </span>
        </button>
      </header>
    </>
  )
}
