import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import AddServices from './Components/Dashboard/AddServices/AddServices';
import AddReview from './Components/Dashboard/AddReview/AddReview';
import AdminPanel from './Components/Dashboard/AdminPanel/AdminPanel';
import ServiceOrder from './Components/ServiceOrder/ServiceOrder/ServiceOrder';
import Login from './Components/Login/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import Orders from './Components/ServiceOrder/Orders/Orders';
import ManageService from './Components/Dashboard/ManageService/ManageService';
import Navbar from './Components/ReUse/Navbar/Navbar';


export const UserContext = createContext();

function App() {

    const [loggedInUser, setLoggedInUser] = useState({});

    return (
        <>
            <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
                <Router>
                    <Navbar></Navbar>
                    <div className="pages">
                        <Switch>
                            <Route exact path="/">
                                <Home></Home>
                            </Route>
                            <PrivateRoute path="/dashboard">
                                <Dashboard></Dashboard>
                            </PrivateRoute>
                            <Route path="/addService">
                                <AddServices></AddServices>
                            </Route>
                            <Route path="/addReview">
                                <AddReview></AddReview>
                            </Route>
                            <Route path="/addAdmin">
                                <AdminPanel></AdminPanel>
                            </Route>
                            <Route path="/allServices">
                                <ManageService></ManageService>
                            </Route>
                            <Route path="/orders">
                                <Orders></Orders>
                            </Route>
                            <PrivateRoute path="/service/:id">
                                <ServiceOrder></ServiceOrder>
                            </PrivateRoute>
                            <Route path="/login">
                                <Login></Login>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </UserContext.Provider>
        </>
    );
}

export default App;
