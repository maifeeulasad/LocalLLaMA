import React, { lazy, Suspense } from 'react';

const Page1lxhcom = lazy(() => import('./Page'));

const LazyPage1lxhcom = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxhcom />
  </Suspense>
);

export { LazyPage1lxhcom };
