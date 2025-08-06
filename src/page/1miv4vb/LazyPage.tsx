import React, { lazy, Suspense } from 'react';

const Page1miv4vb = lazy(() => import('./Page'));

const LazyPage1miv4vb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miv4vb />
  </Suspense>
);

export { LazyPage1miv4vb };
