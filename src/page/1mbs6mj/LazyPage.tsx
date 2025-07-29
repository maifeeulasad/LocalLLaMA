import React, { lazy, Suspense } from 'react';

const Page1mbs6mj = lazy(() => import('./Page'));

const LazyPage1mbs6mj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbs6mj />
  </Suspense>
);

export { LazyPage1mbs6mj };
