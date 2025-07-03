import React, { lazy, Suspense } from 'react';

const Page1lpr8wf = lazy(() => import('./Page'));

const LazyPage1lpr8wf = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpr8wf />
  </Suspense>
);

export { LazyPage1lpr8wf };
