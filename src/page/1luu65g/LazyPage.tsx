import React, { lazy, Suspense } from 'react';

const Page1luu65g = lazy(() => import('./Page'));

const LazyPage1luu65g = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1luu65g />
  </Suspense>
);

export { LazyPage1luu65g };
