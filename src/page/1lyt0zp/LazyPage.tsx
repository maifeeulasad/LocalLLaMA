import React, { lazy, Suspense } from 'react';

const Page1lyt0zp = lazy(() => import('./Page'));

const LazyPage1lyt0zp = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lyt0zp />
  </Suspense>
);

export { LazyPage1lyt0zp };
