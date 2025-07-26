import React, { lazy, Suspense } from 'react';

const Page1m98jl8 = lazy(() => import('./Page'));

const LazyPage1m98jl8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m98jl8 />
  </Suspense>
);

export { LazyPage1m98jl8 };
