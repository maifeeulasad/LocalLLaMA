import React, { lazy, Suspense } from 'react';

const Page1luroqh = lazy(() => import('./Page'));

const LazyPage1luroqh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1luroqh />
  </Suspense>
);

export { LazyPage1luroqh };
