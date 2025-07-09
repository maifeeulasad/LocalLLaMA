import React, { lazy, Suspense } from 'react';

const Page1luwgkn = lazy(() => import('./Page'));

const LazyPage1luwgkn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1luwgkn />
  </Suspense>
);

export { LazyPage1luwgkn };
