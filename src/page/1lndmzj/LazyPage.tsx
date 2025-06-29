import React, { lazy, Suspense } from 'react';

const Page1lndmzj = lazy(() => import('./Page'));

const LazyPage1lndmzj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lndmzj />
  </Suspense>
);

export { LazyPage1lndmzj };
