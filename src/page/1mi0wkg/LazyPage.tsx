import React, { lazy, Suspense } from 'react';

const Page1mi0wkg = lazy(() => import('./Page'));

const LazyPage1mi0wkg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mi0wkg />
  </Suspense>
);

export { LazyPage1mi0wkg };
