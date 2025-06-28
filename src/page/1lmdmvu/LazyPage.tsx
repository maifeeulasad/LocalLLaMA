import React, { lazy, Suspense } from 'react';

const Page1lmdmvu = lazy(() => import('./Page'));

const LazyPage1lmdmvu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lmdmvu />
  </Suspense>
);

export { LazyPage1lmdmvu };
