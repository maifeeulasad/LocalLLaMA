import React, { lazy, Suspense } from 'react';

const Page1m8w7ny = lazy(() => import('./Page'));

const LazyPage1m8w7ny = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8w7ny />
  </Suspense>
);

export { LazyPage1m8w7ny };
