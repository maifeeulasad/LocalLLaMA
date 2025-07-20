import React, { lazy, Suspense } from 'react';

const Page1m4j5nf = lazy(() => import('./Page'));

const LazyPage1m4j5nf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4j5nf />
  </Suspense>
);

export { LazyPage1m4j5nf };
