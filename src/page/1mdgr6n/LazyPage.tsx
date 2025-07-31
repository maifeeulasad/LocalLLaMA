import React, { lazy, Suspense } from 'react';

const Page1mdgr6n = lazy(() => import('./Page'));

const LazyPage1mdgr6n = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdgr6n />
  </Suspense>
);

export { LazyPage1mdgr6n };
