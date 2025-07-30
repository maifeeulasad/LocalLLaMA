import React, { lazy, Suspense } from 'react';

const Page1mczdxa = lazy(() => import('./Page'));

const LazyPage1mczdxa = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mczdxa />
  </Suspense>
);

export { LazyPage1mczdxa };
