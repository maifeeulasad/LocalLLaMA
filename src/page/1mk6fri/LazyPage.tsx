import React, { lazy, Suspense } from 'react';

const Page1mk6fri = lazy(() => import('./Page'));

const LazyPage1mk6fri = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mk6fri />
  </Suspense>
);

export { LazyPage1mk6fri };
