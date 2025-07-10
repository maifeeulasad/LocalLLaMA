import React, { lazy, Suspense } from 'react';

const Page1lvm4vg = lazy(() => import('./Page'));

const LazyPage1lvm4vg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lvm4vg />
  </Suspense>
);

export { LazyPage1lvm4vg };
