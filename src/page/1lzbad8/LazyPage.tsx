import React, { lazy, Suspense } from 'react';

const Page1lzbad8 = lazy(() => import('./Page'));

const LazyPage1lzbad8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lzbad8 />
  </Suspense>
);

export { LazyPage1lzbad8 };
