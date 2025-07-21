import React, { lazy, Suspense } from 'react';

const Page1m58ohn = lazy(() => import('./Page'));

const LazyPage1m58ohn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m58ohn />
  </Suspense>
);

export { LazyPage1m58ohn };
