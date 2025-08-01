import React, { lazy, Suspense } from 'react';

const Page1me6lic = lazy(() => import('./Page'));

const LazyPage1me6lic = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1me6lic />
  </Suspense>
);

export { LazyPage1me6lic };
