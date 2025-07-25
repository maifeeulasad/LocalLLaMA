import React, { lazy, Suspense } from 'react';

const Page1m8myxl = lazy(() => import('./Page'));

const LazyPage1m8myxl = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8myxl />
  </Suspense>
);

export { LazyPage1m8myxl };
