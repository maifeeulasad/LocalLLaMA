import React, { lazy, Suspense } from 'react';

const Page1lmp3en = lazy(() => import('./Page'));

const LazyPage1lmp3en = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmp3en />
  </Suspense>
);

export { LazyPage1lmp3en };
