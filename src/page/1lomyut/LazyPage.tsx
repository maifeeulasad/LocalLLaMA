import React, { lazy, Suspense } from 'react';

const Page1lomyut = lazy(() => import('./Page'));

const LazyPage1lomyut = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lomyut />
  </Suspense>
);

export { LazyPage1lomyut };
