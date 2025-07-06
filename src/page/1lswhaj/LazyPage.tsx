import React, { lazy, Suspense } from 'react';

const Page1lswhaj = lazy(() => import('./Page'));

const LazyPage1lswhaj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lswhaj />
  </Suspense>
);

export { LazyPage1lswhaj };
