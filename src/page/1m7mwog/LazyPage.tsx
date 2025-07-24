import React, { lazy, Suspense } from 'react';

const Page1m7mwog = lazy(() => import('./Page'));

const LazyPage1m7mwog = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7mwog />
  </Suspense>
);

export { LazyPage1m7mwog };
