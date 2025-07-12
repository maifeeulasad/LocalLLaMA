import React, { lazy, Suspense } from 'react';

const Page1lxnwtg = lazy(() => import('./Page'));

const LazyPage1lxnwtg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxnwtg />
  </Suspense>
);

export { LazyPage1lxnwtg };
