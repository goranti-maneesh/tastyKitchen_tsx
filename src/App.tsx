import { BrowserRouter, Switch, Route } from "react-router-dom";
import {AuthHooks} from './Auth/hooks/useAuthStore'

import Login from './Auth/components/LoginPage/LoginPage'

const App = () => {
  return(
    <BrowserRouter>
    <AuthHooks>
      <Switch>
          <Route path='/login' component={Login}/>
      </Switch>
      </AuthHooks>
  </BrowserRouter>
  )
}

export default App;
