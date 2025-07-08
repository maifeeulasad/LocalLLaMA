import React, { lazy, Suspense } from 'react';

const Page1lui2hs = lazy(() => import('./Page'));

const LazyPage1lui2hs = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lui2hs />
  </Suspense>
);

export { LazyPage1lui2hs };
