import React, { lazy, Suspense } from 'react';

const Page1mirhpt = lazy(() => import('./Page'));

const LazyPage1mirhpt = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mirhpt />
  </Suspense>
);

export { LazyPage1mirhpt };
