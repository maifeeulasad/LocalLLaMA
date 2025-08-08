import React, { lazy, Suspense } from 'react';

const Page1mkokj2 = lazy(() => import('./Page'));

const LazyPage1mkokj2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mkokj2 />
  </Suspense>
);

export { LazyPage1mkokj2 };
