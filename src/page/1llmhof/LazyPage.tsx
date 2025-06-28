import React, { lazy, Suspense } from 'react';

const Page1llmhof = lazy(() => import('./Page'));

const LazyPage1llmhof = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1llmhof />
  </Suspense>
);

export { LazyPage1llmhof };
