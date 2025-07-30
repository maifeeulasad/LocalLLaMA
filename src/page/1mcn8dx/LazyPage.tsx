import React, { lazy, Suspense } from 'react';

const Page1mcn8dx = lazy(() => import('./Page'));

const LazyPage1mcn8dx = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcn8dx />
  </Suspense>
);

export { LazyPage1mcn8dx };
