import "./styles/index.scss";
import { Recipes } from "./components/Recipes";
import { NavLink, Switch, Route } from "react-router-dom";
import { PageRedux } from "./pages/PageRedux";

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>App jsx file</main>
      <NavLink to="/page_first">Page1</NavLink>
      <NavLink to="/page_second">Page2</NavLink>
      <Switch>
        <Route path="/page_first" component={Recipes} />
        <Route path="/page_second" component={PageRedux} />
      </Switch>
    </>
  );
};

export default App;
