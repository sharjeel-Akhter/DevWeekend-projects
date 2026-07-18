import Header from './Components/Header'
import Counter from './Components/Counter'
import {Provider} from 'react-redux'
import {store} from '../src/Store/store'


function App() {


  return (
    <Provider store={store}>
      <Header/>
      <Counter/>
    
    </Provider>
  )
}

export default App
