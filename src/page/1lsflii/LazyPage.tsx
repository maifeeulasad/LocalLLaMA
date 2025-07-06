import React, { lazy, Suspense } from 'react';

const Page1lsflii = lazy(() => import('./Page'));

const LazyPage1lsflii = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsflii />
  </Suspense>
);

export { LazyPage1lsflii };
