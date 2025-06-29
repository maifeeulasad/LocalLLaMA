import React, { lazy, Suspense } from 'react';

const Page1lmranc = lazy(() => import('./Page'));

const LazyPage1lmranc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmranc />
  </Suspense>
);

export { LazyPage1lmranc };
