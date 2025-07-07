import React, { lazy, Suspense } from 'react';

const Page1ltze9d = lazy(() => import('./Page'));

const LazyPage1ltze9d = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltze9d />
  </Suspense>
);

export { LazyPage1ltze9d };
