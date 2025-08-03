import React, { lazy, Suspense } from 'react';

const Page1mgfccn = lazy(() => import('./Page'));

const LazyPage1mgfccn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgfccn />
  </Suspense>
);

export { LazyPage1mgfccn };
