import React, { lazy, Suspense } from 'react';

const Page1mgkiti = lazy(() => import('./Page'));

const LazyPage1mgkiti = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgkiti />
  </Suspense>
);

export { LazyPage1mgkiti };
