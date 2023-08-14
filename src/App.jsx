import Header from './components/Header'
import Options from './components/Options'
import UserInfo from './components/UserInfo'

import { ThemeProvider } from './context/ThemeContext'

export default function App () {
  return (
    <>
      <ThemeProvider>
        <main>
          <Header />
          <div>
            <UserInfo />
          </div>
          <Options />
        </main>
      </ThemeProvider>
    </>
  )
}
