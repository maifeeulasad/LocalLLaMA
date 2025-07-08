import React, { lazy, Suspense } from 'react';

const Page1lugdls = lazy(() => import('./Page'));

const LazyPage1lugdls = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lugdls />
  </Suspense>
);

export { LazyPage1lugdls };
