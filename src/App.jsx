import Header from './components/Header'
import InputPost from './components/InputPost'
import Options from './components/Options'
import Thread from './components/Thread'
import UserInfo from './components/UserInfo'

import { ThemeProvider } from './context/ThemeContext'

export default function App () {
  return (
    <>
      <ThemeProvider>
        <main className='w-screen screen mr-auto flex-col flex grow ml-auto md:pl-3 md:pr-3 md:max-w-[620px]'>
          <Header />
          <UserInfo />
          <Options />
          <Thread />
          <InputPost />
        </main>
      </ThemeProvider>
    </>
  )
}
