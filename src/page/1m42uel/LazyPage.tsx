import React, { lazy, Suspense } from 'react';

const Page1m42uel = lazy(() => import('./Page'));

const LazyPage1m42uel = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m42uel />
  </Suspense>
);

export { LazyPage1m42uel };
