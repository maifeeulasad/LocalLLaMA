import React, { lazy, Suspense } from 'react';

const Page1iaebwp = lazy(() => import('./Page'));

const LazyPage1iaebwp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1iaebwp />
  </Suspense>
);

export { LazyPage1iaebwp };
