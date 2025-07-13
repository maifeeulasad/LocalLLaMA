import React, { lazy, Suspense } from 'react';

const Page1lyq1yh = lazy(() => import('./Page'));

const LazyPage1lyq1yh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyq1yh />
  </Suspense>
);

export { LazyPage1lyq1yh };
