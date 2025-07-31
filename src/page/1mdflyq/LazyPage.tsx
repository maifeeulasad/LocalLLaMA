import React, { lazy, Suspense } from 'react';

const Page1mdflyq = lazy(() => import('./Page'));

const LazyPage1mdflyq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdflyq />
  </Suspense>
);

export { LazyPage1mdflyq };
