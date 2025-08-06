import React, { lazy, Suspense } from 'react';

const Page1mifejm = lazy(() => import('./Page'));

const LazyPage1mifejm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mifejm />
  </Suspense>
);

export { LazyPage1mifejm };
