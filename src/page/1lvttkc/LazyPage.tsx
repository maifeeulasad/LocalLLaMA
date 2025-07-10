import React, { lazy, Suspense } from 'react';

const Page1lvttkc = lazy(() => import('./Page'));

const LazyPage1lvttkc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvttkc />
  </Suspense>
);

export { LazyPage1lvttkc };
