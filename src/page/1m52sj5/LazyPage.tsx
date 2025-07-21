import React, { lazy, Suspense } from 'react';

const Page1m52sj5 = lazy(() => import('./Page'));

const LazyPage1m52sj5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m52sj5 />
  </Suspense>
);

export { LazyPage1m52sj5 };
