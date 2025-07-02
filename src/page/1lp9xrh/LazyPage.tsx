import React, { lazy, Suspense } from 'react';

const Page1lp9xrh = lazy(() => import('./Page'));

const LazyPage1lp9xrh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lp9xrh />
  </Suspense>
);

export { LazyPage1lp9xrh };
