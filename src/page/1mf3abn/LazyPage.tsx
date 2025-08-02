import React, { lazy, Suspense } from 'react';

const Page1mf3abn = lazy(() => import('./Page'));

const LazyPage1mf3abn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mf3abn />
  </Suspense>
);

export { LazyPage1mf3abn };
