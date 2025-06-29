import React, { lazy, Suspense } from 'react';

const Page1lnesft = lazy(() => import('./Page'));

const LazyPage1lnesft = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lnesft />
  </Suspense>
);

export { LazyPage1lnesft };
