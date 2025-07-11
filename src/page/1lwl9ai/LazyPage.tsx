import React, { lazy, Suspense } from 'react';

const Page1lwl9ai = lazy(() => import('./Page'));

const LazyPage1lwl9ai = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwl9ai />
  </Suspense>
);

export { LazyPage1lwl9ai };
