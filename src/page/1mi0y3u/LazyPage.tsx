import React, { lazy, Suspense } from 'react';

const Page1mi0y3u = lazy(() => import('./Page'));

const LazyPage1mi0y3u = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mi0y3u />
  </Suspense>
);

export { LazyPage1mi0y3u };
