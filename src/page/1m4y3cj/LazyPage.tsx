import React, { lazy, Suspense } from 'react';

const Page1m4y3cj = lazy(() => import('./Page'));

const LazyPage1m4y3cj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4y3cj />
  </Suspense>
);

export { LazyPage1m4y3cj };
