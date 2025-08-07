import React, { lazy, Suspense } from 'react';

const Page1mjevrf = lazy(() => import('./Page'));

const LazyPage1mjevrf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjevrf />
  </Suspense>
);

export { LazyPage1mjevrf };
