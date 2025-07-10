import React, { lazy, Suspense } from 'react';

const Page1lw71av = lazy(() => import('./Page'));

const LazyPage1lw71av = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lw71av />
  </Suspense>
);

export { LazyPage1lw71av };
