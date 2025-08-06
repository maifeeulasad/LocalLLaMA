import React, { lazy, Suspense } from 'react';

const Page1milxsh = lazy(() => import('./Page'));

const LazyPage1milxsh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1milxsh />
  </Suspense>
);

export { LazyPage1milxsh };
