import React, { lazy, Suspense } from 'react';

const Page1milr4q = lazy(() => import('./Page'));

const LazyPage1milr4q = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1milr4q />
  </Suspense>
);

export { LazyPage1milr4q };
