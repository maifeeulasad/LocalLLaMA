import React, { lazy, Suspense } from 'react';

const Page1mbfhgp = lazy(() => import('./Page'));

const LazyPage1mbfhgp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbfhgp />
  </Suspense>
);

export { LazyPage1mbfhgp };
