import React, { lazy, Suspense } from 'react';

const Page1m52b7l = lazy(() => import('./Page'));

const LazyPage1m52b7l = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m52b7l />
  </Suspense>
);

export { LazyPage1m52b7l };
