import React, { lazy, Suspense } from 'react';

const Page1mbocxc = lazy(() => import('./Page'));

const LazyPage1mbocxc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbocxc />
  </Suspense>
);

export { LazyPage1mbocxc };
