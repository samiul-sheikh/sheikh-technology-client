import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import AddServices from './Components/Dashboard/AddServices/AddServices';
import AddReview from './Components/Dashboard/AddReview/AddReview';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route path="/dashboard">
                    <Dashboard></Dashboard>
                </Route>
                <Route path="/addService">
                    <AddServices></AddServices>
                </Route>
                <Route path="/addReview">
                    <AddReview></AddReview>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
