import React, { lazy, Suspense } from 'react';

const Page1lpntxc = lazy(() => import('./Page'));

const LazyPage1lpntxc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lpntxc />
  </Suspense>
);

export { LazyPage1lpntxc };
