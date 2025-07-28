import React, { lazy, Suspense } from 'react';

const Page1mb6jzz = lazy(() => import('./Page'));

const LazyPage1mb6jzz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mb6jzz />
  </Suspense>
);

export { LazyPage1mb6jzz };
