import React, { lazy, Suspense } from 'react';

const Page1m2gp16 = lazy(() => import('./Page'));

const LazyPage1m2gp16 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m2gp16 />
  </Suspense>
);

export { LazyPage1m2gp16 };
