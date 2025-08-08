import React, { lazy, Suspense } from 'react';

const Page1mkowrw = lazy(() => import('./Page'));

const LazyPage1mkowrw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkowrw />
  </Suspense>
);

export { LazyPage1mkowrw };
