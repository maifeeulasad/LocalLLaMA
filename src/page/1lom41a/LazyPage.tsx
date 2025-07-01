import React, { lazy, Suspense } from 'react';

const Page1lom41a = lazy(() => import('./Page'));

const LazyPage1lom41a = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lom41a />
  </Suspense>
);

export { LazyPage1lom41a };
