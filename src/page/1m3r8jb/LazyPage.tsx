import React, { lazy, Suspense } from 'react';

const Page1m3r8jb = lazy(() => import('./Page'));

const LazyPage1m3r8jb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3r8jb />
  </Suspense>
);

export { LazyPage1m3r8jb };
