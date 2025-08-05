import React, { lazy, Suspense } from 'react';

const Page1mhitwa = lazy(() => import('./Page'));

const LazyPage1mhitwa = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhitwa />
  </Suspense>
);

export { LazyPage1mhitwa };
