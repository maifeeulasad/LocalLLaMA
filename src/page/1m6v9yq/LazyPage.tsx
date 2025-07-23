import React, { lazy, Suspense } from 'react';

const Page1m6v9yq = lazy(() => import('./Page'));

const LazyPage1m6v9yq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6v9yq />
  </Suspense>
);

export { LazyPage1m6v9yq };
