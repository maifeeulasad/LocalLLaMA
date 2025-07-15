import React, { lazy, Suspense } from 'react';

const Page1m0eq11 = lazy(() => import('./Page'));

const LazyPage1m0eq11 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0eq11 />
  </Suspense>
);

export { LazyPage1m0eq11 };
