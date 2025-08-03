import React, { lazy, Suspense } from 'react';

const Page1mgccyc = lazy(() => import('./Page'));

const LazyPage1mgccyc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mgccyc />
  </Suspense>
);

export { LazyPage1mgccyc };
