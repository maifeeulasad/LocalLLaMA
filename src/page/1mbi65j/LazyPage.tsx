import React, { lazy, Suspense } from 'react';

const Page1mbi65j = lazy(() => import('./Page'));

const LazyPage1mbi65j = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbi65j />
  </Suspense>
);

export { LazyPage1mbi65j };
