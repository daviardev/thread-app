import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { $ } from './utils/dom'
import { ThemeProvider } from './context/ThemeContext.jsx'

import './index.css'

ReactDOM.createRoot($('#root')).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)
