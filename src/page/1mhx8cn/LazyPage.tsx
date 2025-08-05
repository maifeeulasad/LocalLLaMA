import React, { lazy, Suspense } from 'react';

const Page1mhx8cn = lazy(() => import('./Page'));

const LazyPage1mhx8cn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhx8cn />
  </Suspense>
);

export { LazyPage1mhx8cn };
