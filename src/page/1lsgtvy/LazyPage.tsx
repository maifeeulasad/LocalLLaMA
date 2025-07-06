import React, { lazy, Suspense } from 'react';

const Page1lsgtvy = lazy(() => import('./Page'));

const LazyPage1lsgtvy = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsgtvy />
  </Suspense>
);

export { LazyPage1lsgtvy };
