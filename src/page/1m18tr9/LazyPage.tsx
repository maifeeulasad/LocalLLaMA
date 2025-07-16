import React, { lazy, Suspense } from 'react';

const Page1m18tr9 = lazy(() => import('./Page'));

const LazyPage1m18tr9 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m18tr9 />
  </Suspense>
);

export { LazyPage1m18tr9 };
