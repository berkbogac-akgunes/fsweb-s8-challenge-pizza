import "./App.css"
import { Switch, Route, NavLink } from "react-router-dom"
import Siparis from "./Siparis"
import AnaSayfa from "./AnaSayfa"

function App() {
    return(
        <>
      <Switch>
      <Route path = "/" exact>
            <AnaSayfa/>
        </Route>
        <Route path = "/siparis">
            <Siparis/>
        </Route>
      </Switch>
        </>
    )
}

export default App