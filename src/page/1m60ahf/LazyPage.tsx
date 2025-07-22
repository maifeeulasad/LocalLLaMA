import React, { lazy, Suspense } from 'react';

const Page1m60ahf = lazy(() => import('./Page'));

const LazyPage1m60ahf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m60ahf />
  </Suspense>
);

export { LazyPage1m60ahf };
