import React, { lazy, Suspense } from 'react';

const Page1mf8pdo = lazy(() => import('./Page'));

const LazyPage1mf8pdo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mf8pdo />
  </Suspense>
);

export { LazyPage1mf8pdo };
