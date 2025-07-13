import React, { lazy, Suspense } from 'react';

const Page1lymlgp = lazy(() => import('./Page'));

const LazyPage1lymlgp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lymlgp />
  </Suspense>
);

export { LazyPage1lymlgp };
