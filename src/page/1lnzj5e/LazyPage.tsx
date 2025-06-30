import React, { lazy, Suspense } from 'react';

const Page1lnzj5e = lazy(() => import('./Page'));

const LazyPage1lnzj5e = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lnzj5e />
  </Suspense>
);

export { LazyPage1lnzj5e };
