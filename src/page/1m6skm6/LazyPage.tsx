import React, { lazy, Suspense } from 'react';

const Page1m6skm6 = lazy(() => import('./Page'));

const LazyPage1m6skm6 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6skm6 />
  </Suspense>
);

export { LazyPage1m6skm6 };
