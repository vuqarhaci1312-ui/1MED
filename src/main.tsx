import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import ErrorBoundary from './components/error/ErrorBoundary.tsx'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from './contexts/ThemeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider>
      <ErrorBoundary fallback={<h1>Something went wrong.</h1>}>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </ErrorBoundary>
    </ThemeProvider>
  </BrowserRouter>,
)
