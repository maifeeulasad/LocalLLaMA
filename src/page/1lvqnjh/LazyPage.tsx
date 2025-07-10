import React, { lazy, Suspense } from 'react';

const Page1lvqnjh = lazy(() => import('./Page'));

const LazyPage1lvqnjh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvqnjh />
  </Suspense>
);

export { LazyPage1lvqnjh };
