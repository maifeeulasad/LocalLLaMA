import React, { lazy, Suspense } from 'react';

const Page1llty3n = lazy(() => import('./Page'));

const LazyPage1llty3n = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1llty3n />
  </Suspense>
);

export { LazyPage1llty3n };
