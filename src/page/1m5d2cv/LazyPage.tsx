import React, { lazy, Suspense } from 'react';

const Page1m5d2cv = lazy(() => import('./Page'));

const LazyPage1m5d2cv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5d2cv />
  </Suspense>
);

export { LazyPage1m5d2cv };
