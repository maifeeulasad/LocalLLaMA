import React, { lazy, Suspense } from 'react';

const Page1m0slrh = lazy(() => import('./Page'));

const LazyPage1m0slrh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m0slrh />
  </Suspense>
);

export { LazyPage1m0slrh };
