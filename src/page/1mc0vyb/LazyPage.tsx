import React, { lazy, Suspense } from 'react';

const Page1mc0vyb = lazy(() => import('./Page'));

const LazyPage1mc0vyb = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mc0vyb />
  </Suspense>
);

export { LazyPage1mc0vyb };
