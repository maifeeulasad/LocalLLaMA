import React, { lazy, Suspense } from 'react';

const Page1mgadmz = lazy(() => import('./Page'));

const LazyPage1mgadmz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgadmz />
  </Suspense>
);

export { LazyPage1mgadmz };
