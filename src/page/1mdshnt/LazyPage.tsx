import React, { lazy, Suspense } from 'react';

const Page1mdshnt = lazy(() => import('./Page'));

const LazyPage1mdshnt = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdshnt />
  </Suspense>
);

export { LazyPage1mdshnt };
