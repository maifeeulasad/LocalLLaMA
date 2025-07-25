import React, { lazy, Suspense } from 'react';

const Page1m8uozu = lazy(() => import('./Page'));

const LazyPage1m8uozu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m8uozu />
  </Suspense>
);

export { LazyPage1m8uozu };
