import React, { lazy, Suspense } from 'react';

const Page1lz0hk3 = lazy(() => import('./Page'));

const LazyPage1lz0hk3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lz0hk3 />
  </Suspense>
);

export { LazyPage1lz0hk3 };
