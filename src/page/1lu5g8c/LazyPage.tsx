import React, { lazy, Suspense } from 'react';

const Page1lu5g8c = lazy(() => import('./Page'));

const LazyPage1lu5g8c = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lu5g8c />
  </Suspense>
);

export { LazyPage1lu5g8c };
