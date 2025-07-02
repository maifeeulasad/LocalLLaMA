import React, { lazy, Suspense } from 'react';

const Page1lpe7hs = lazy(() => import('./Page'));

const LazyPage1lpe7hs = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpe7hs />
  </Suspense>
);

export { LazyPage1lpe7hs };
