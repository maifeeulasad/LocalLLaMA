import React, { lazy, Suspense } from 'react';

const Page1mgpb8t = lazy(() => import('./Page'));

const LazyPage1mgpb8t = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgpb8t />
  </Suspense>
);

export { LazyPage1mgpb8t };
