import React, { lazy, Suspense } from 'react';

const Page1lx4qhp = lazy(() => import('./Page'));

const LazyPage1lx4qhp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lx4qhp />
  </Suspense>
);

export { LazyPage1lx4qhp };
