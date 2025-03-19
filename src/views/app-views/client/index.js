import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Loading from 'components/shared-components/Loading';

const UserList = lazy(() => import("./userList"));
const EditProfile = lazy(() => import("./editProfile"));


const Clients = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>

    <Route path={`${match.url}/userList/editProfile/:userId`} component={EditProfile} /> 
    <Route exact path={`${match.url}/userList`} component={UserList} />

    </Switch>
  </Suspense>
);

export default Clients;