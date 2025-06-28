import React, { lazy, Suspense } from 'react';

const Page1icaq2z = lazy(() => import('./Page'));

const LazyPage1icaq2z = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1icaq2z />
  </Suspense>
);

export { LazyPage1icaq2z };
