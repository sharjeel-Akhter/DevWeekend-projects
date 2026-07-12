import { AllRoutes } from "./routes/AllRoutes"
import { Header, Card, Footer } from './Components'
import { MovieList } from "./Pages"
import { ThemeProvider } from "./hooks/useTheme"

function App() {


  return (
    <> 
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
              <Header />
      <main className="bg-white grow">
      <AllRoutes />
      </main>
      <Footer/>
      </div>

    </ThemeProvider>
   
    </>
  )
}

export default App
