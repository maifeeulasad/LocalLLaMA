import React, { lazy, Suspense } from 'react';

const Page1mgkgek = lazy(() => import('./Page'));

const LazyPage1mgkgek = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgkgek />
  </Suspense>
);

export { LazyPage1mgkgek };
