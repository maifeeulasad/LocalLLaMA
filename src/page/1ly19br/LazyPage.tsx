import React, { lazy, Suspense } from 'react';

const Page1ly19br = lazy(() => import('./Page'));

const LazyPage1ly19br = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ly19br />
  </Suspense>
);

export { LazyPage1ly19br };
