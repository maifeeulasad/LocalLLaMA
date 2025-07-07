import React, { lazy, Suspense } from 'react';

const Page1ltv847 = lazy(() => import('./Page'));

const LazyPage1ltv847 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltv847 />
  </Suspense>
);

export { LazyPage1ltv847 };
