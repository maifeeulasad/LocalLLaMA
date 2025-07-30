import React, { lazy, Suspense } from 'react';

const Page1mcsh69 = lazy(() => import('./Page'));

const LazyPage1mcsh69 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcsh69 />
  </Suspense>
);

export { LazyPage1mcsh69 };
