import React, { lazy, Suspense } from 'react';

const Page1me3vpe = lazy(() => import('./Page'));

const LazyPage1me3vpe = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me3vpe />
  </Suspense>
);

export { LazyPage1me3vpe };
