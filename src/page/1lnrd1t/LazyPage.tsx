import React, { lazy, Suspense } from 'react';

const Page1lnrd1t = lazy(() => import('./Page'));

const LazyPage1lnrd1t = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lnrd1t />
  </Suspense>
);

export { LazyPage1lnrd1t };
