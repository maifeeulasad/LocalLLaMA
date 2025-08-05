import React, { lazy, Suspense } from 'react';

const Page1mhj1cr = lazy(() => import('./Page'));

const LazyPage1mhj1cr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhj1cr />
  </Suspense>
);

export { LazyPage1mhj1cr };
