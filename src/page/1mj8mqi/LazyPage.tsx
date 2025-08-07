import React, { lazy, Suspense } from 'react';

const Page1mj8mqi = lazy(() => import('./Page'));

const LazyPage1mj8mqi = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj8mqi />
  </Suspense>
);

export { LazyPage1mj8mqi };
