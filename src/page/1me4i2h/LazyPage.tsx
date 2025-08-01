import React, { lazy, Suspense } from 'react';

const Page1me4i2h = lazy(() => import('./Page'));

const LazyPage1me4i2h = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me4i2h />
  </Suspense>
);

export { LazyPage1me4i2h };
