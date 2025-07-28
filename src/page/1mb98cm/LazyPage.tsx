import React, { lazy, Suspense } from 'react';

const Page1mb98cm = lazy(() => import('./Page'));

const LazyPage1mb98cm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mb98cm />
  </Suspense>
);

export { LazyPage1mb98cm };
