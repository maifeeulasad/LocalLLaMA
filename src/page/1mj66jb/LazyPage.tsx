import React, { lazy, Suspense } from 'react';

const Page1mj66jb = lazy(() => import('./Page'));

const LazyPage1mj66jb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj66jb />
  </Suspense>
);

export { LazyPage1mj66jb };
