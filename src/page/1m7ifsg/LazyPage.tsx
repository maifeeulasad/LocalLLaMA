import React, { lazy, Suspense } from 'react';

const Page1m7ifsg = lazy(() => import('./Page'));

const LazyPage1m7ifsg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7ifsg />
  </Suspense>
);

export { LazyPage1m7ifsg };
