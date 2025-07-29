import React, { lazy, Suspense } from 'react';

const Page1mbghx5 = lazy(() => import('./Page'));

const LazyPage1mbghx5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbghx5 />
  </Suspense>
);

export { LazyPage1mbghx5 };
