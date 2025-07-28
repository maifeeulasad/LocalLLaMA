import React, { lazy, Suspense } from 'react';

const Page1mbaxqj = lazy(() => import('./Page'));

const LazyPage1mbaxqj = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbaxqj />
  </Suspense>
);

export { LazyPage1mbaxqj };
