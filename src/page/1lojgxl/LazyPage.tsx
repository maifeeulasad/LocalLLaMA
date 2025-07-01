import React, { lazy, Suspense } from 'react';

const Page1lojgxl = lazy(() => import('./Page'));

const LazyPage1lojgxl = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lojgxl />
  </Suspense>
);

export { LazyPage1lojgxl };
