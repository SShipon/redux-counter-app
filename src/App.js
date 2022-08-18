import { Provider } from 'react-redux';
import store from './redux/store.js';
import './App.css';
import Counter from './Pages/Counter/Counter.jsx';

function App() {
  return (
    <Provider store={store}>
      
        <Counter></Counter>
      
    </Provider>
  );
}

export default App;
