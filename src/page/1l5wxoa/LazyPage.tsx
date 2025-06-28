import React, { lazy, Suspense } from 'react';

const Page1l5wxoa = lazy(() => import('./Page'));

const LazyPage1l5wxoa = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1l5wxoa />
  </Suspense>
);

export { LazyPage1l5wxoa };
