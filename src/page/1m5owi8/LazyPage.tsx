import React, { lazy, Suspense } from 'react';

const Page1m5owi8 = lazy(() => import('./Page'));

const LazyPage1m5owi8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5owi8 />
  </Suspense>
);

export { LazyPage1m5owi8 };
