import React, { lazy, Suspense } from 'react';

const Page1jl5jea = lazy(() => import('./Page'));

const LazyPage1jl5jea = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1jl5jea />
  </Suspense>
);

export { LazyPage1jl5jea };
