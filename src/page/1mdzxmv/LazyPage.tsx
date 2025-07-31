import React, { lazy, Suspense } from 'react';

const Page1mdzxmv = lazy(() => import('./Page'));

const LazyPage1mdzxmv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdzxmv />
  </Suspense>
);

export { LazyPage1mdzxmv };
