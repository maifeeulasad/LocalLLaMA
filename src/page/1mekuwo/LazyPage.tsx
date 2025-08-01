import React, { lazy, Suspense } from 'react';

const Page1mekuwo = lazy(() => import('./Page'));

const LazyPage1mekuwo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mekuwo />
  </Suspense>
);

export { LazyPage1mekuwo };
