import React, { lazy, Suspense } from 'react';

const Page1mdwu18 = lazy(() => import('./Page'));

const LazyPage1mdwu18 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdwu18 />
  </Suspense>
);

export { LazyPage1mdwu18 };
