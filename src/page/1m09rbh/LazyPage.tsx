import React, { lazy, Suspense } from 'react';

const Page1m09rbh = lazy(() => import('./Page'));

const LazyPage1m09rbh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m09rbh />
  </Suspense>
);

export { LazyPage1m09rbh };
