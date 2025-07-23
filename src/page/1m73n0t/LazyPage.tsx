import React, { lazy, Suspense } from 'react';

const Page1m73n0t = lazy(() => import('./Page'));

const LazyPage1m73n0t = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m73n0t />
  </Suspense>
);

export { LazyPage1m73n0t };
