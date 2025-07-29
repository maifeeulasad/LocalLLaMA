import React, { lazy, Suspense } from 'react';

const Page1mc8evq = lazy(() => import('./Page'));

const LazyPage1mc8evq = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mc8evq />
  </Suspense>
);

export { LazyPage1mc8evq };
