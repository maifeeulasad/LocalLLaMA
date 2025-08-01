import React, { lazy, Suspense } from 'react';

const Page1me3qyu = lazy(() => import('./Page'));

const LazyPage1me3qyu = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me3qyu />
  </Suspense>
);

export { LazyPage1me3qyu };
