import React, { lazy, Suspense } from 'react';

const Page1m80dz3 = lazy(() => import('./Page'));

const LazyPage1m80dz3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m80dz3 />
  </Suspense>
);

export { LazyPage1m80dz3 };
