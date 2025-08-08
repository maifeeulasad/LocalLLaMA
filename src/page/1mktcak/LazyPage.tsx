import React, { lazy, Suspense } from 'react';

const Page1mktcak = lazy(() => import('./Page'));

const LazyPage1mktcak = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mktcak />
  </Suspense>
);

export { LazyPage1mktcak };
