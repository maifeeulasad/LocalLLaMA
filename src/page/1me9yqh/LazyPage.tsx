import React, { lazy, Suspense } from 'react';

const Page1me9yqh = lazy(() => import('./Page'));

const LazyPage1me9yqh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me9yqh />
  </Suspense>
);

export { LazyPage1me9yqh };
