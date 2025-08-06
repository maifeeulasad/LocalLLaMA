import React, { lazy, Suspense } from 'react';

const Page1mj38wf = lazy(() => import('./Page'));

const LazyPage1mj38wf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj38wf />
  </Suspense>
);

export { LazyPage1mj38wf };
