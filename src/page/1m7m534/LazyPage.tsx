import React, { lazy, Suspense } from 'react';

const Page1m7m534 = lazy(() => import('./Page'));

const LazyPage1m7m534 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7m534 />
  </Suspense>
);

export { LazyPage1m7m534 };
