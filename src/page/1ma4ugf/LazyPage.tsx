import React, { lazy, Suspense } from 'react';

const Page1ma4ugf = lazy(() => import('./Page'));

const LazyPage1ma4ugf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ma4ugf />
  </Suspense>
);

export { LazyPage1ma4ugf };
