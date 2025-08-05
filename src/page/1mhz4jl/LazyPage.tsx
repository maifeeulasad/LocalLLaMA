import React, { lazy, Suspense } from 'react';

const Page1mhz4jl = lazy(() => import('./Page'));

const LazyPage1mhz4jl = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhz4jl />
  </Suspense>
);

export { LazyPage1mhz4jl };
