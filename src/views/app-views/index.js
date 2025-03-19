import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig';

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
        <Route path={`${APP_PREFIX_PATH}/clients`} component={lazy(() => import('./client'))} />
        <Route path={`${APP_PREFIX_PATH}/scheduler`} component={lazy(() => import('./ObjectPlanner'))} />
      </Switch>
    </Suspense>
  );
};

export default React.memo(AppViews);