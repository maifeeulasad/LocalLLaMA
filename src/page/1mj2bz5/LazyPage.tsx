import React, { lazy, Suspense } from 'react';

const Page1mj2bz5 = lazy(() => import('./Page'));

const LazyPage1mj2bz5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj2bz5 />
  </Suspense>
);

export { LazyPage1mj2bz5 };
