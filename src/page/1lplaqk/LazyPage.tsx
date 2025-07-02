import React, { lazy, Suspense } from 'react';

const Page1lplaqk = lazy(() => import('./Page'));

const LazyPage1lplaqk = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lplaqk />
  </Suspense>
);

export { LazyPage1lplaqk };
