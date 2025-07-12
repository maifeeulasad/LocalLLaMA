import React, { lazy, Suspense } from 'react';

const Page1lxlgjk = lazy(() => import('./Page'));

const LazyPage1lxlgjk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxlgjk />
  </Suspense>
);

export { LazyPage1lxlgjk };
