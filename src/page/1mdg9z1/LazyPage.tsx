import React, { lazy, Suspense } from 'react';

const Page1mdg9z1 = lazy(() => import('./Page'));

const LazyPage1mdg9z1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdg9z1 />
  </Suspense>
);

export { LazyPage1mdg9z1 };
