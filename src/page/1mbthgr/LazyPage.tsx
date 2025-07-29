import React, { lazy, Suspense } from 'react';

const Page1mbthgr = lazy(() => import('./Page'));

const LazyPage1mbthgr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbthgr />
  </Suspense>
);

export { LazyPage1mbthgr };
