import React, { lazy, Suspense } from 'react';

const Page1lsx9pn = lazy(() => import('./Page'));

const LazyPage1lsx9pn = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lsx9pn />
  </Suspense>
);

export { LazyPage1lsx9pn };
