import React, { lazy, Suspense } from 'react';

const Page1mf2cu1 = lazy(() => import('./Page'));

const LazyPage1mf2cu1 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mf2cu1 />
  </Suspense>
);

export { LazyPage1mf2cu1 };
