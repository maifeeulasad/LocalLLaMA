import React, { lazy, Suspense } from 'react';

const Page1lobqvc = lazy(() => import('./Page'));

const LazyPage1lobqvc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lobqvc />
  </Suspense>
);

export { LazyPage1lobqvc };
