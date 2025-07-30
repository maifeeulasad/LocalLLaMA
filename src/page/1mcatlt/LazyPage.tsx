import React, { lazy, Suspense } from 'react';

const Page1mcatlt = lazy(() => import('./Page'));

const LazyPage1mcatlt = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcatlt />
  </Suspense>
);

export { LazyPage1mcatlt };
