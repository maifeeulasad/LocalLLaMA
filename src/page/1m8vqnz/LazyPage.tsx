import React, { lazy, Suspense } from 'react';

const Page1m8vqnz = lazy(() => import('./Page'));

const LazyPage1m8vqnz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8vqnz />
  </Suspense>
);

export { LazyPage1m8vqnz };
