import React, { lazy, Suspense } from 'react';

const Page1mhx1kc = lazy(() => import('./Page'));

const LazyPage1mhx1kc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhx1kc />
  </Suspense>
);

export { LazyPage1mhx1kc };
