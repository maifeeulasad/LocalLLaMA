import React, { lazy, Suspense } from 'react';

const Page1me3e7w = lazy(() => import('./Page'));

const LazyPage1me3e7w = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me3e7w />
  </Suspense>
);

export { LazyPage1me3e7w };
