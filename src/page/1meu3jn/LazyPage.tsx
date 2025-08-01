import React, { lazy, Suspense } from 'react';

const Page1meu3jn = lazy(() => import('./Page'));

const LazyPage1meu3jn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1meu3jn />
  </Suspense>
);

export { LazyPage1meu3jn };
