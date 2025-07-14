import React, { lazy, Suspense } from 'react';

const Page1lzvuu7 = lazy(() => import('./Page'));

const LazyPage1lzvuu7 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzvuu7 />
  </Suspense>
);

export { LazyPage1lzvuu7 };
