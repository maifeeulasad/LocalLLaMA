import React, { lazy, Suspense } from 'react';

const Page1m081hm = lazy(() => import('./Page'));

const LazyPage1m081hm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m081hm />
  </Suspense>
);

export { LazyPage1m081hm };
