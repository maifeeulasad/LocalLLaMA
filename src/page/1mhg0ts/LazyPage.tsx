import React, { lazy, Suspense } from 'react';

const Page1mhg0ts = lazy(() => import('./Page'));

const LazyPage1mhg0ts = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhg0ts />
  </Suspense>
);

export { LazyPage1mhg0ts };
