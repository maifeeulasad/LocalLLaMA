import React, { lazy, Suspense } from 'react';

const Page1ltxsqh = lazy(() => import('./Page'));

const LazyPage1ltxsqh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1ltxsqh />
  </Suspense>
);

export { LazyPage1ltxsqh };
