import React, { lazy, Suspense } from 'react';

const Page1majfwi = lazy(() => import('./Page'));

const LazyPage1majfwi = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1majfwi />
  </Suspense>
);

export { LazyPage1majfwi };
