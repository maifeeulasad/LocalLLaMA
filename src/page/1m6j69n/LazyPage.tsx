import React, { lazy, Suspense } from 'react';

const Page1m6j69n = lazy(() => import('./Page'));

const LazyPage1m6j69n = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6j69n />
  </Suspense>
);

export { LazyPage1m6j69n };
