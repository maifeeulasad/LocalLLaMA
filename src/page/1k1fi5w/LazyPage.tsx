import React, { lazy, Suspense } from 'react';

const Page1k1fi5w = lazy(() => import('./Page'));

const LazyPage1k1fi5w = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1k1fi5w />
  </Suspense>
);

export { LazyPage1k1fi5w };
