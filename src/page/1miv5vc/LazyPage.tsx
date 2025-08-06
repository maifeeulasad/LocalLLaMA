import React, { lazy, Suspense } from 'react';

const Page1miv5vc = lazy(() => import('./Page'));

const LazyPage1miv5vc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1miv5vc />
  </Suspense>
);

export { LazyPage1miv5vc };
