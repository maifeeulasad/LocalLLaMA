import React, { lazy, Suspense } from 'react';

const Page1m6qdet = lazy(() => import('./Page'));

const LazyPage1m6qdet = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m6qdet />
  </Suspense>
);

export { LazyPage1m6qdet };
