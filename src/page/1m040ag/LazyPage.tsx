import React, { lazy, Suspense } from 'react';

const Page1m040ag = lazy(() => import('./Page'));

const LazyPage1m040ag = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m040ag />
  </Suspense>
);

export { LazyPage1m040ag };
