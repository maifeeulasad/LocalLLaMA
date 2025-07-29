import React, { lazy, Suspense } from 'react';

const Page1mbflkv = lazy(() => import('./Page'));

const LazyPage1mbflkv = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mbflkv />
  </Suspense>
);

export { LazyPage1mbflkv };
