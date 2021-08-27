import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import { Route, Switch } from "react-router-dom"
import CartDetail from "../cart/CartDetail";
import Dashboard from "../root/Dashboard"
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";

function App() {
  return (
    <Container>
      <Navi/>
      <Switch>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/product" exact component={Dashboard}/>
        <Route path="/cart" exact component={CartDetail}/>
        <Route path="/saveproduct/:productId" component={AddOrUpdateProduct}/>
        <Route path="/saveproduct/" component={AddOrUpdateProduct}/>
        <Route component={NotFound}/>
      </Switch>
    </Container>
  );
}

export default App;
