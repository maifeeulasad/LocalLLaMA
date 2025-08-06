import React, { lazy, Suspense } from 'react';

const Page1milm9t = lazy(() => import('./Page'));

const LazyPage1milm9t = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1milm9t />
  </Suspense>
);

export { LazyPage1milm9t };
