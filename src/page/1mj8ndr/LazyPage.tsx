import React, { lazy, Suspense } from 'react';

const Page1mj8ndr = lazy(() => import('./Page'));

const LazyPage1mj8ndr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj8ndr />
  </Suspense>
);

export { LazyPage1mj8ndr };
