import React, { lazy, Suspense } from 'react';

const Page1m91dmh = lazy(() => import('./Page'));

const LazyPage1m91dmh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m91dmh />
  </Suspense>
);

export { LazyPage1m91dmh };
