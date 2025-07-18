import React, { lazy, Suspense } from 'react';

const Page1m305vc = lazy(() => import('./Page'));

const LazyPage1m305vc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m305vc />
  </Suspense>
);

export { LazyPage1m305vc };
