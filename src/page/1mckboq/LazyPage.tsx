import React, { lazy, Suspense } from 'react';

const Page1mckboq = lazy(() => import('./Page'));

const LazyPage1mckboq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mckboq />
  </Suspense>
);

export { LazyPage1mckboq };
