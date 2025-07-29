import React, { lazy, Suspense } from 'react';

const Page1mc22jg = lazy(() => import('./Page'));

const LazyPage1mc22jg = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mc22jg />
  </Suspense>
);

export { LazyPage1mc22jg };
