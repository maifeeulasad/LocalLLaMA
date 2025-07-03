import React, { lazy, Suspense } from 'react';

const Page1lq8z04 = lazy(() => import('./Page'));

const LazyPage1lq8z04 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lq8z04 />
  </Suspense>
);

export { LazyPage1lq8z04 };
