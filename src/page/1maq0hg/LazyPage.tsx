import React, { lazy, Suspense } from 'react';

const Page1maq0hg = lazy(() => import('./Page'));

const LazyPage1maq0hg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1maq0hg />
  </Suspense>
);

export { LazyPage1maq0hg };
