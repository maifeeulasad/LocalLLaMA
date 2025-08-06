import React, { lazy, Suspense } from 'react';

const Page1midu35 = lazy(() => import('./Page'));

const LazyPage1midu35 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1midu35 />
  </Suspense>
);

export { LazyPage1midu35 };
