import React, { lazy, Suspense } from 'react';

const Page1lwtaor = lazy(() => import('./Page'));

const LazyPage1lwtaor = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwtaor />
  </Suspense>
);

export { LazyPage1lwtaor };
