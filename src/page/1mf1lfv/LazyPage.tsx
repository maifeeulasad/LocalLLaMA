import React, { lazy, Suspense } from 'react';

const Page1mf1lfv = lazy(() => import('./Page'));

const LazyPage1mf1lfv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mf1lfv />
  </Suspense>
);

export { LazyPage1mf1lfv };
