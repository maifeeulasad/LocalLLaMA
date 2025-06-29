import React, { lazy, Suspense } from 'react';

const Page1ln93o3 = lazy(() => import('./Page'));

const LazyPage1ln93o3 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ln93o3 />
  </Suspense>
);

export { LazyPage1ln93o3 };
