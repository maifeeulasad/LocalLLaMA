import React, { lazy, Suspense } from 'react';

const Page1lrq827 = lazy(() => import('./Page'));

const LazyPage1lrq827 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lrq827 />
  </Suspense>
);

export { LazyPage1lrq827 };
