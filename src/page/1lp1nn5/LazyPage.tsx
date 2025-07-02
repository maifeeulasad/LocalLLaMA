import React, { lazy, Suspense } from 'react';

const Page1lp1nn5 = lazy(() => import('./Page'));

const LazyPage1lp1nn5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lp1nn5 />
  </Suspense>
);

export { LazyPage1lp1nn5 };
