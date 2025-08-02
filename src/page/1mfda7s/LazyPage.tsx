import React, { lazy, Suspense } from 'react';

const Page1mfda7s = lazy(() => import('./Page'));

const LazyPage1mfda7s = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfda7s />
  </Suspense>
);

export { LazyPage1mfda7s };
