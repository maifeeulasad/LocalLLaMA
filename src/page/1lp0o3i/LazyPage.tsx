import React, { lazy, Suspense } from 'react';

const Page1lp0o3i = lazy(() => import('./Page'));

const LazyPage1lp0o3i = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lp0o3i />
  </Suspense>
);

export { LazyPage1lp0o3i };
