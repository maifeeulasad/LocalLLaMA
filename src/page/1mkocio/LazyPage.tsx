import React, { lazy, Suspense } from 'react';

const Page1mkocio = lazy(() => import('./Page'));

const LazyPage1mkocio = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkocio />
  </Suspense>
);

export { LazyPage1mkocio };
