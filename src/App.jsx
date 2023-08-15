import Header from './components/Header'
import Modal from './components/Modal'
import Options from './components/Options'
import UserInfo from './components/UserInfo'

import { ThemeProvider } from './context/ThemeContext'

export default function App () {
  return (
    <>
      <ThemeProvider>
        <main className='w-screen screen mr-auto flex-col flex grow ml-auto md:pl-3 md:pr-3 md:max-w-[620px]'>
          <Header />
          <div>
            <UserInfo />
            <Modal />
          </div>
          <Options />
        </main>
      </ThemeProvider>
    </>
  )
}
