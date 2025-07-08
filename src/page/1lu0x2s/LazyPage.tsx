import React, { lazy, Suspense } from 'react';

const Page1lu0x2s = lazy(() => import('./Page'));

const LazyPage1lu0x2s = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lu0x2s />
  </Suspense>
);

export { LazyPage1lu0x2s };
