import React, { lazy, Suspense } from 'react';

const Page1lwva7f = lazy(() => import('./Page'));

const LazyPage1lwva7f = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwva7f />
  </Suspense>
);

export { LazyPage1lwva7f };
