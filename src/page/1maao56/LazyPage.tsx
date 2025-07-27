import React, { lazy, Suspense } from 'react';

const Page1maao56 = lazy(() => import('./Page'));

const LazyPage1maao56 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1maao56 />
  </Suspense>
);

export { LazyPage1maao56 };
