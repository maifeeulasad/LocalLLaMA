import React, { lazy, Suspense } from 'react';

const Page1m7i537 = lazy(() => import('./Page'));

const LazyPage1m7i537 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7i537 />
  </Suspense>
);

export { LazyPage1m7i537 };
