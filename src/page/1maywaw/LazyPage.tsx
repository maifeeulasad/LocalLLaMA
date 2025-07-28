import React, { lazy, Suspense } from 'react';

const Page1maywaw = lazy(() => import('./Page'));

const LazyPage1maywaw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1maywaw />
  </Suspense>
);

export { LazyPage1maywaw };
