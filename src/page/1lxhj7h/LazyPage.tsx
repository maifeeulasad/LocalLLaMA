import React, { lazy, Suspense } from 'react';

const Page1lxhj7h = lazy(() => import('./Page'));

const LazyPage1lxhj7h = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxhj7h />
  </Suspense>
);

export { LazyPage1lxhj7h };
