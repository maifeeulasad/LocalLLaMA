import React, { lazy, Suspense } from 'react';

const Page1lwpi5p = lazy(() => import('./Page'));

const LazyPage1lwpi5p = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwpi5p />
  </Suspense>
);

export { LazyPage1lwpi5p };
