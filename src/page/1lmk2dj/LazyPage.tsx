import React, { lazy, Suspense } from 'react';

const Page1lmk2dj = lazy(() => import('./Page'));

const LazyPage1lmk2dj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmk2dj />
  </Suspense>
);

export { LazyPage1lmk2dj };
