import React, { lazy, Suspense } from 'react';

const Page1lnt6yj = lazy(() => import('./Page'));

const LazyPage1lnt6yj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lnt6yj />
  </Suspense>
);

export { LazyPage1lnt6yj };
