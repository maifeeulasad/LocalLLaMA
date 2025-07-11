import React, { lazy, Suspense } from 'react';

const Page1lwuzjo = lazy(() => import('./Page'));

const LazyPage1lwuzjo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwuzjo />
  </Suspense>
);

export { LazyPage1lwuzjo };
