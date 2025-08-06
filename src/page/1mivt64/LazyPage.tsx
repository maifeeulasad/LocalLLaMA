import React, { lazy, Suspense } from 'react';

const Page1mivt64 = lazy(() => import('./Page'));

const LazyPage1mivt64 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mivt64 />
  </Suspense>
);

export { LazyPage1mivt64 };
