import React, { lazy, Suspense } from 'react';

const Page1me467z = lazy(() => import('./Page'));

const LazyPage1me467z = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me467z />
  </Suspense>
);

export { LazyPage1me467z };
