import React, { lazy, Suspense } from 'react';

const Page1mfap30 = lazy(() => import('./Page'));

const LazyPage1mfap30 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfap30 />
  </Suspense>
);

export { LazyPage1mfap30 };
