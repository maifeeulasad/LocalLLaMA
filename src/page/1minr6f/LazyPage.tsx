import React, { lazy, Suspense } from 'react';

const Page1minr6f = lazy(() => import('./Page'));

const LazyPage1minr6f = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1minr6f />
  </Suspense>
);

export { LazyPage1minr6f };
