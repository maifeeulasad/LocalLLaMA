import React, { lazy, Suspense } from 'react';

const Page1mce9tt = lazy(() => import('./Page'));

const LazyPage1mce9tt = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mce9tt />
  </Suspense>
);

export { LazyPage1mce9tt };
