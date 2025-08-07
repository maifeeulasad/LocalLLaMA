import React, { lazy, Suspense } from 'react';

const Page1mj8pqo = lazy(() => import('./Page'));

const LazyPage1mj8pqo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mj8pqo />
  </Suspense>
);

export { LazyPage1mj8pqo };
