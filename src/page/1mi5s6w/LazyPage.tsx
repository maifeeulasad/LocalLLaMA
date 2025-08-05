import React, { lazy, Suspense } from 'react';

const Page1mi5s6w = lazy(() => import('./Page'));

const LazyPage1mi5s6w = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mi5s6w />
  </Suspense>
);

export { LazyPage1mi5s6w };
