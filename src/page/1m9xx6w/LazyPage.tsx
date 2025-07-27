import React, { lazy, Suspense } from 'react';

const Page1m9xx6w = lazy(() => import('./Page'));

const LazyPage1m9xx6w = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9xx6w />
  </Suspense>
);

export { LazyPage1m9xx6w };
