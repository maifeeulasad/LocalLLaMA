import React, { lazy, Suspense } from 'react';

const Page1klx9q2 = lazy(() => import('./Page'));

const LazyPage1klx9q2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1klx9q2 />
  </Suspense>
);

export { LazyPage1klx9q2 };
