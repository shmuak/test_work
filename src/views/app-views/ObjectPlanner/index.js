import React, { lazy, Suspense } from "react";
import Loading from 'components/shared-components/Loading';

const ObjectPlanner = lazy(() => import("./planner"));

const Scheduler = () => (
  <Suspense fallback={<Loading cover="content"/>}>
    <ObjectPlanner />
  </Suspense>
);

export default Scheduler;