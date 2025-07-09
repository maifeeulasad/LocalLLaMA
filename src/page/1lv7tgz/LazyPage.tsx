import React, { lazy, Suspense } from 'react';

const Page1lv7tgz = lazy(() => import('./Page'));

const LazyPage1lv7tgz = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lv7tgz />
  </Suspense>
);

export { LazyPage1lv7tgz };
