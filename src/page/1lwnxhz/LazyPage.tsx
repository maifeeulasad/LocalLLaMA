import React, { lazy, Suspense } from 'react';

const Page1lwnxhz = lazy(() => import('./Page'));

const LazyPage1lwnxhz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwnxhz />
  </Suspense>
);

export { LazyPage1lwnxhz };
