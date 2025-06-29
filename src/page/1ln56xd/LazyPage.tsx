import React, { lazy, Suspense } from 'react';

const Page1ln56xd = lazy(() => import('./Page'));

const LazyPage1ln56xd = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ln56xd />
  </Suspense>
);

export { LazyPage1ln56xd };
