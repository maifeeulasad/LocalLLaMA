import React, { lazy, Suspense } from 'react';

const Page1mf7snn = lazy(() => import('./Page'));

const LazyPage1mf7snn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mf7snn />
  </Suspense>
);

export { LazyPage1mf7snn };
