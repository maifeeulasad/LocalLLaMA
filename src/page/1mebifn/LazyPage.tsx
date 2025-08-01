import React, { lazy, Suspense } from 'react';

const Page1mebifn = lazy(() => import('./Page'));

const LazyPage1mebifn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mebifn />
  </Suspense>
);

export { LazyPage1mebifn };
