import React, { lazy, Suspense } from 'react';

const Page1md6w3w = lazy(() => import('./Page'));

const LazyPage1md6w3w = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1md6w3w />
  </Suspense>
);

export { LazyPage1md6w3w };
