import React, { lazy, Suspense } from 'react';

const Page1m9zrmo = lazy(() => import('./Page'));

const LazyPage1m9zrmo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m9zrmo />
  </Suspense>
);

export { LazyPage1m9zrmo };
