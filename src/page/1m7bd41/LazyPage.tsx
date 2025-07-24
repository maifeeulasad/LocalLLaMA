import React, { lazy, Suspense } from 'react';

const Page1m7bd41 = lazy(() => import('./Page'));

const LazyPage1m7bd41 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7bd41 />
  </Suspense>
);

export { LazyPage1m7bd41 };
