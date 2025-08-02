import React, { lazy, Suspense } from 'react';

const Page1mf4ihq = lazy(() => import('./Page'));

const LazyPage1mf4ihq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mf4ihq />
  </Suspense>
);

export { LazyPage1mf4ihq };
