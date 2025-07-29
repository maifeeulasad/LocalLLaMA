import React, { lazy, Suspense } from 'react';

const Page1mc2ibo = lazy(() => import('./Page'));

const LazyPage1mc2ibo = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mc2ibo />
  </Suspense>
);

export { LazyPage1mc2ibo };
