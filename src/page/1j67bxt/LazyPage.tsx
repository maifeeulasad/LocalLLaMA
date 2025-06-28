import React, { lazy, Suspense } from 'react';

const Page1j67bxt = lazy(() => import('./Page'));

const LazyPage1j67bxt = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1j67bxt />
  </Suspense>
);

export { LazyPage1j67bxt };
