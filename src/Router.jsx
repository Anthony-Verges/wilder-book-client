import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import Form from "./component/Form";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/formulaire" component={Form} />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
