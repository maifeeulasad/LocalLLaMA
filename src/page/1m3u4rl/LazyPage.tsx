import React, { lazy, Suspense } from 'react';

const Page1m3u4rl = lazy(() => import('./Page'));

const LazyPage1m3u4rl = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3u4rl />
  </Suspense>
);

export { LazyPage1m3u4rl };
