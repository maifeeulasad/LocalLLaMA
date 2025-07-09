import React, { lazy, Suspense } from 'react';

const Page1lvm3kv = lazy(() => import('./Page'));

const LazyPage1lvm3kv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvm3kv />
  </Suspense>
);

export { LazyPage1lvm3kv };
