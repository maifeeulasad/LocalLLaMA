import React, { lazy, Suspense } from 'react';

const Page1lw7yxp = lazy(() => import('./Page'));

const LazyPage1lw7yxp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lw7yxp />
  </Suspense>
);

export { LazyPage1lw7yxp };
