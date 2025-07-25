import React, { lazy, Suspense } from 'react';

const Page1m8mwme = lazy(() => import('./Page'));

const LazyPage1m8mwme = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8mwme />
  </Suspense>
);

export { LazyPage1m8mwme };
