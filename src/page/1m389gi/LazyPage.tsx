import React, { lazy, Suspense } from 'react';

const Page1m389gi = lazy(() => import('./Page'));

const LazyPage1m389gi = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m389gi />
  </Suspense>
);

export { LazyPage1m389gi };
