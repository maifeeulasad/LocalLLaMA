import React, { lazy, Suspense } from 'react';

const Page1mhb5el = lazy(() => import('./Page'));

const LazyPage1mhb5el = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhb5el />
  </Suspense>
);

export { LazyPage1mhb5el };
