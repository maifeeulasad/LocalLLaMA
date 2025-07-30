import React, { lazy, Suspense } from 'react';

const Page1mcva93 = lazy(() => import('./Page'));

const LazyPage1mcva93 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcva93 />
  </Suspense>
);

export { LazyPage1mcva93 };
