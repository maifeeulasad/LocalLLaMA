import React, { lazy, Suspense } from 'react';

const Page1m4vcnz = lazy(() => import('./Page'));

const LazyPage1m4vcnz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4vcnz />
  </Suspense>
);

export { LazyPage1m4vcnz };
