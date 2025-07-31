import React, { lazy, Suspense } from 'react';

const Page1mdolik = lazy(() => import('./Page'));

const LazyPage1mdolik = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdolik />
  </Suspense>
);

export { LazyPage1mdolik };
