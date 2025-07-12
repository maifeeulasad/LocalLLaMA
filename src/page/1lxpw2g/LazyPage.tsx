import React, { lazy, Suspense } from 'react';

const Page1lxpw2g = lazy(() => import('./Page'));

const LazyPage1lxpw2g = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lxpw2g />
  </Suspense>
);

export { LazyPage1lxpw2g };
