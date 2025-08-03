import React, { lazy, Suspense } from 'react';

const Page1mfuu40 = lazy(() => import('./Page'));

const LazyPage1mfuu40 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfuu40 />
  </Suspense>
);

export { LazyPage1mfuu40 };
