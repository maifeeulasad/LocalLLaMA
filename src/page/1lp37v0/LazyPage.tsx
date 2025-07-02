import React, { lazy, Suspense } from 'react';

const Page1lp37v0 = lazy(() => import('./Page'));

const LazyPage1lp37v0 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lp37v0 />
  </Suspense>
);

export { LazyPage1lp37v0 };
