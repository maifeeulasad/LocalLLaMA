import React, { lazy, Suspense } from 'react';

const Page1ly3mrl = lazy(() => import('./Page'));

const LazyPage1ly3mrl = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ly3mrl />
  </Suspense>
);

export { LazyPage1ly3mrl };
