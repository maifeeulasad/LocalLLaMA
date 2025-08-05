import React, { lazy, Suspense } from 'react';

const Page1mhrryp = lazy(() => import('./Page'));

const LazyPage1mhrryp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhrryp />
  </Suspense>
);

export { LazyPage1mhrryp };
