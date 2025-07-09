import React, { lazy, Suspense } from 'react';

const Page1lvm3tl = lazy(() => import('./Page'));

const LazyPage1lvm3tl = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvm3tl />
  </Suspense>
);

export { LazyPage1lvm3tl };
