import React, { lazy, Suspense } from 'react';

const Page1me3b7o = lazy(() => import('./Page'));

const LazyPage1me3b7o = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me3b7o />
  </Suspense>
);

export { LazyPage1me3b7o };
