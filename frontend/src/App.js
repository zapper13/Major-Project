import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



/* These lines are importing three components (`Navbar`, `SideDrawer`, and `Backdrop`) from their
respective files located in the `./components` directory. These components are then used in the
`App` component to render the navigation bar, side drawer, and backdrop for the application's user
interface. */

import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/Backdrop";



/* These lines are importing the components that represent the different screens of the application.
`HomeScreen` represents the home page, `ProductScreen` represents the page for displaying a specific
product, and `CartScreen` represents the page for displaying the user's shopping cart. These
components are then used in the `Route` components to render the appropriate screen based on the
current URL path. */

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";


/* This is the main component of a React application. It sets up the routing for the different screens
of the application using the `react-router-dom` library. It also renders the `Navbar`, `SideDrawer`,
and `Backdrop` components, which are used for navigation and user interface. The `useState` hook is
used to manage the state of the `sideToggle` variable, which determines whether the `SideDrawer`
component is visible or not. The `Switch` component is used to render the appropriate screen based
on the current URL path. The `Route` components define the paths and components to be rendered for
each screen. */

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main className="app">
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
