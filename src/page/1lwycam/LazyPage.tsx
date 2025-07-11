import React, { lazy, Suspense } from 'react';

const Page1lwycam = lazy(() => import('./Page'));

const LazyPage1lwycam = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwycam />
  </Suspense>
);

export { LazyPage1lwycam };
