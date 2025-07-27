import React, { lazy, Suspense } from 'react';

const Page1macmej = lazy(() => import('./Page'));

const LazyPage1macmej = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1macmej />
  </Suspense>
);

export { LazyPage1macmej };
