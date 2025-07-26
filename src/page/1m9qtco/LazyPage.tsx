import React, { lazy, Suspense } from 'react';

const Page1m9qtco = lazy(() => import('./Page'));

const LazyPage1m9qtco = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9qtco />
  </Suspense>
);

export { LazyPage1m9qtco };
