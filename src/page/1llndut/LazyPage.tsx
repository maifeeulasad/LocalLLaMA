import React, { lazy, Suspense } from 'react';

const Page1llndut = lazy(() => import('./Page'));

const LazyPage1llndut = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1llndut />
  </Suspense>
);

export { LazyPage1llndut };
