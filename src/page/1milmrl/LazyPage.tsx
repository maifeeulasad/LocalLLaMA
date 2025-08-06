import React, { lazy, Suspense } from 'react';

const Page1milmrl = lazy(() => import('./Page'));

const LazyPage1milmrl = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1milmrl />
  </Suspense>
);

export { LazyPage1milmrl };
