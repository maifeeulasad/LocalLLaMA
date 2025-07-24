import React, { lazy, Suspense } from 'react';

const Page1m7c2gr = lazy(() => import('./Page'));

const LazyPage1m7c2gr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7c2gr />
  </Suspense>
);

export { LazyPage1m7c2gr };
