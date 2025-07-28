import React, { lazy, Suspense } from 'react';

const Page1mbei14 = lazy(() => import('./Page'));

const LazyPage1mbei14 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbei14 />
  </Suspense>
);

export { LazyPage1mbei14 };
