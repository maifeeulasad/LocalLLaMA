import React, { lazy, Suspense } from 'react';

const Page1lqdcgr = lazy(() => import('./Page'));

const LazyPage1lqdcgr = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lqdcgr />
  </Suspense>
);

export { LazyPage1lqdcgr };
