import React, { lazy, Suspense } from 'react';

const Page1ls7vmb = lazy(() => import('./Page'));

const LazyPage1ls7vmb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ls7vmb />
  </Suspense>
);

export { LazyPage1ls7vmb };
