import React, { lazy, Suspense } from 'react';

const Page1mcdlxc = lazy(() => import('./Page'));

const LazyPage1mcdlxc = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcdlxc />
  </Suspense>
);

export { LazyPage1mcdlxc };
