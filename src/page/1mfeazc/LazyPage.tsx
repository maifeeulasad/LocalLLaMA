import React, { lazy, Suspense } from 'react';

const Page1mfeazc = lazy(() => import('./Page'));

const LazyPage1mfeazc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfeazc />
  </Suspense>
);

export { LazyPage1mfeazc };
