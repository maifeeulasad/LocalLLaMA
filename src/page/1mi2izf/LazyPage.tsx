import React, { lazy, Suspense } from 'react';

const Page1mi2izf = lazy(() => import('./Page'));

const LazyPage1mi2izf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mi2izf />
  </Suspense>
);

export { LazyPage1mi2izf };
