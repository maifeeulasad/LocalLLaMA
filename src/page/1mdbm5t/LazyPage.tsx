import React, { lazy, Suspense } from 'react';

const Page1mdbm5t = lazy(() => import('./Page'));

const LazyPage1mdbm5t = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mdbm5t />
  </Suspense>
);

export { LazyPage1mdbm5t };
