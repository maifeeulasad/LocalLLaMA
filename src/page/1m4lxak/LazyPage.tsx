import React, { lazy, Suspense } from 'react';

const Page1m4lxak = lazy(() => import('./Page'));

const LazyPage1m4lxak = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4lxak />
  </Suspense>
);

export { LazyPage1m4lxak };
