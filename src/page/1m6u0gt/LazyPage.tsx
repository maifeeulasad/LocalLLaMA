import React, { lazy, Suspense } from 'react';

const Page1m6u0gt = lazy(() => import('./Page'));

const LazyPage1m6u0gt = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6u0gt />
  </Suspense>
);

export { LazyPage1m6u0gt };
