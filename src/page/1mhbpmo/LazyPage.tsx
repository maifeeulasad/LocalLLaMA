import React, { lazy, Suspense } from 'react';

const Page1mhbpmo = lazy(() => import('./Page'));

const LazyPage1mhbpmo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhbpmo />
  </Suspense>
);

export { LazyPage1mhbpmo };
