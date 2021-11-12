import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ContextProvider from './Components/Context/ContextProvider';
import PrivateLayout from './Components/PrivateLayout/PrivateLayout';
import PublicLayout from './Components/PublicLayout/PublicLayout';

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/dashboard">
              <PrivateLayout></PrivateLayout>
            </Route>
            <Route path="/">
              <PublicLayout></PublicLayout>
            </Route>
          </Switch>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
