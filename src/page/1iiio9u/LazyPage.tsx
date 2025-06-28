import React, { lazy, Suspense } from 'react';

const Page1iiio9u = lazy(() => import('./Page'));

const LazyPage1iiio9u = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1iiio9u />
  </Suspense>
);

export { LazyPage1iiio9u };
