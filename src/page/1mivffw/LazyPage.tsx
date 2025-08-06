import React, { lazy, Suspense } from 'react';

const Page1mivffw = lazy(() => import('./Page'));

const LazyPage1mivffw = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mivffw />
  </Suspense>
);

export { LazyPage1mivffw };
