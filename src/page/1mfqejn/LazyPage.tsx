import React, { lazy, Suspense } from 'react';

const Page1mfqejn = lazy(() => import('./Page'));

const LazyPage1mfqejn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mfqejn />
  </Suspense>
);

export { LazyPage1mfqejn };
