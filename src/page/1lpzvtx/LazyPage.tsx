import React, { lazy, Suspense } from 'react';

const Page1lpzvtx = lazy(() => import('./Page'));

const LazyPage1lpzvtx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpzvtx />
  </Suspense>
);

export { LazyPage1lpzvtx };
