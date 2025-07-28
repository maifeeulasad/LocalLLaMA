import React, { lazy, Suspense } from 'react';

const Page1mbeecr = lazy(() => import('./Page'));

const LazyPage1mbeecr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbeecr />
  </Suspense>
);

export { LazyPage1mbeecr };
