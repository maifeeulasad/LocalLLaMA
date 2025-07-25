import React, { lazy, Suspense } from 'react';

const Page1m8tlmk = lazy(() => import('./Page'));

const LazyPage1m8tlmk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8tlmk />
  </Suspense>
);

export { LazyPage1m8tlmk };
