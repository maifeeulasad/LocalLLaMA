import React, { lazy, Suspense } from 'react';

const Page1lvh87a = lazy(() => import('./Page'));

const LazyPage1lvh87a = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvh87a />
  </Suspense>
);

export { LazyPage1lvh87a };
