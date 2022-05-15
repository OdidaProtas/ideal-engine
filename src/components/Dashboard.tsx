import DashLoading from "../pages/DashLoading";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import DataTable from "./DataTable";
import Drawer from "./Drawer";
import Filters from "./Filters";
import Home from "./Home";
import AppDetail from "../pages/AppDetial";
import APIDetail from "../pages/APIDetail";
import NewApp from "../pages/NewApp";
import IntegrationDetail from "../pages/integrationDetail";
import Pay from "../pages/Pay";
import Billing from "./Billing";
import Features from "../pages/Features";

export default function Dashboard() {
  const { path } = useRouteMatch();
  return (
    <div>
      <Drawer>
        <Switch>
          <Route exact path={`${path}`}>
            <DashLoading />
          </Route>
          <Route exact path={`${path}/Apps/new`}>
            <NewApp />
          </Route>
          <Route exact path={`${path}/Apps/new/checkout`}>
            <Pay />
          </Route>
          <Route exact path={`${path}/Billing`}>
            <Billing />
          </Route>
          <Route exact path={`${path}/Apps/:id`}>
            <AppDetail />
          </Route>
          <Route exact path={`${path}/API/:ctx`}>
            <APIDetail />
          </Route>
          <Route exact path={`${path}/Integrations/:ctx`}>
            <IntegrationDetail />
          </Route>
          <Route path={`${path}/Features`}>
            <Features />
          </Route>
          <Route exact path={`${path}/:id`}>
            <Filters />
            <DataTable />
          </Route>
          <Route exact path={`**`}>
            Requested resource not found
          </Route>
        </Switch>
      </Drawer>
    </div>
  );
}
