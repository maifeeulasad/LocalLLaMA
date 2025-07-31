import React, { lazy, Suspense } from 'react';

const Page1mdq3sv = lazy(() => import('./Page'));

const LazyPage1mdq3sv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdq3sv />
  </Suspense>
);

export { LazyPage1mdq3sv };
