import React, { lazy, Suspense } from 'react';

const Page1m7p7ek = lazy(() => import('./Page'));

const LazyPage1m7p7ek = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7p7ek />
  </Suspense>
);

export { LazyPage1m7p7ek };
