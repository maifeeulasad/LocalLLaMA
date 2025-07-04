import React, { lazy, Suspense } from 'react';

const Page1lr3eh1 = lazy(() => import('./Page'));

const LazyPage1lr3eh1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lr3eh1 />
  </Suspense>
);

export { LazyPage1lr3eh1 };
