import React, { lazy, Suspense } from 'react';

const Page1mip3vn = lazy(() => import('./Page'));

const LazyPage1mip3vn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mip3vn />
  </Suspense>
);

export { LazyPage1mip3vn };
