import React, { lazy, Suspense } from 'react';

const Page1lq6jx8 = lazy(() => import('./Page'));

const LazyPage1lq6jx8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lq6jx8 />
  </Suspense>
);

export { LazyPage1lq6jx8 };
