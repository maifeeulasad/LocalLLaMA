import React, { lazy, Suspense } from 'react';

const Page1me9hhl = lazy(() => import('./Page'));

const LazyPage1me9hhl = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me9hhl />
  </Suspense>
);

export { LazyPage1me9hhl };
