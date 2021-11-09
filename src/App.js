import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import PrivateLayout from './Components/PrivateLayout/PrivateLayout';
import PublicLayout from './Components/PublicLayout/PublicLayout';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
