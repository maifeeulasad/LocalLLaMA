import React, { lazy, Suspense } from 'react';

const Page1mizhbw = lazy(() => import('./Page'));

const LazyPage1mizhbw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mizhbw />
  </Suspense>
);

export { LazyPage1mizhbw };
