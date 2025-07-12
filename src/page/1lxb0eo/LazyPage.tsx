import React, { lazy, Suspense } from 'react';

const Page1lxb0eo = lazy(() => import('./Page'));

const LazyPage1lxb0eo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxb0eo />
  </Suspense>
);

export { LazyPage1lxb0eo };
