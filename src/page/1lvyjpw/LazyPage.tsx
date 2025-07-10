import React, { lazy, Suspense } from 'react';

const Page1lvyjpw = lazy(() => import('./Page'));

const LazyPage1lvyjpw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvyjpw />
  </Suspense>
);

export { LazyPage1lvyjpw };
