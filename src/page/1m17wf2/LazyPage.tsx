import React, { lazy, Suspense } from 'react';

const Page1m17wf2 = lazy(() => import('./Page'));

const LazyPage1m17wf2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m17wf2 />
  </Suspense>
);

export { LazyPage1m17wf2 };
