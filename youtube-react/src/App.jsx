
import './App.css'
import FilterChips from './Components/FilterChips'
import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import VideoCards from './Components/VideoCards'

function App() {

  return (
    <>
      <Header />
      <div className='page-body'>
        <Sidebar />
        <main>
          <FilterChips />
          <div className="video-list">
            <VideoCards />
          </div>
        </main>

      </div>
    </>
  )
}

export default App
