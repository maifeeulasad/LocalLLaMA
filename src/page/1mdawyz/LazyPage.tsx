import React, { lazy, Suspense } from 'react';

const Page1mdawyz = lazy(() => import('./Page'));

const LazyPage1mdawyz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdawyz />
  </Suspense>
);

export { LazyPage1mdawyz };
