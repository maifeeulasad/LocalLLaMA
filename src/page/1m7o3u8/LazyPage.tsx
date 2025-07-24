import React, { lazy, Suspense } from 'react';

const Page1m7o3u8 = lazy(() => import('./Page'));

const LazyPage1m7o3u8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m7o3u8 />
  </Suspense>
);

export { LazyPage1m7o3u8 };
