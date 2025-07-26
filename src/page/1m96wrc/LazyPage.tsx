import React, { lazy, Suspense } from 'react';

const Page1m96wrc = lazy(() => import('./Page'));

const LazyPage1m96wrc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m96wrc />
  </Suspense>
);

export { LazyPage1m96wrc };
