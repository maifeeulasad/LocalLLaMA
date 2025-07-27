import React, { lazy, Suspense } from 'react';

const Page1mal0bo = lazy(() => import('./Page'));

const LazyPage1mal0bo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mal0bo />
  </Suspense>
);

export { LazyPage1mal0bo };
