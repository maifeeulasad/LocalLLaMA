import React, { lazy, Suspense } from 'react';

const Page1m5gmfr = lazy(() => import('./Page'));

const LazyPage1m5gmfr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m5gmfr />
  </Suspense>
);

export { LazyPage1m5gmfr };
