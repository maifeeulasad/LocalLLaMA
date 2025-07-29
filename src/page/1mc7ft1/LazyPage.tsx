import React, { lazy, Suspense } from 'react';

const Page1mc7ft1 = lazy(() => import('./Page'));

const LazyPage1mc7ft1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mc7ft1 />
  </Suspense>
);

export { LazyPage1mc7ft1 };
