import React, { lazy, Suspense } from 'react';

const Page1miupht = lazy(() => import('./Page'));

const LazyPage1miupht = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miupht />
  </Suspense>
);

export { LazyPage1miupht };
