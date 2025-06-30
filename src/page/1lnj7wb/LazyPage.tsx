import React, { lazy, Suspense } from 'react';

const Page1lnj7wb = lazy(() => import('./Page'));

const LazyPage1lnj7wb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lnj7wb />
  </Suspense>
);

export { LazyPage1lnj7wb };
