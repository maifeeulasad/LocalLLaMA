import React, { lazy, Suspense } from 'react';

const Page1m3yzes = lazy(() => import('./Page'));

const LazyPage1m3yzes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m3yzes />
  </Suspense>
);

export { LazyPage1m3yzes };
