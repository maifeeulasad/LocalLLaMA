import React, { lazy, Suspense } from 'react';

const Page1m9535b = lazy(() => import('./Page'));

const LazyPage1m9535b = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9535b />
  </Suspense>
);

export { LazyPage1m9535b };
