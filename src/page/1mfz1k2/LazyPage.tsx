import React, { lazy, Suspense } from 'react';

const Page1mfz1k2 = lazy(() => import('./Page'));

const LazyPage1mfz1k2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfz1k2 />
  </Suspense>
);

export { LazyPage1mfz1k2 };
