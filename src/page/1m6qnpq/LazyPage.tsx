import React, { lazy, Suspense } from 'react';

const Page1m6qnpq = lazy(() => import('./Page'));

const LazyPage1m6qnpq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6qnpq />
  </Suspense>
);

export { LazyPage1m6qnpq };
