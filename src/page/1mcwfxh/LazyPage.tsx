import React, { lazy, Suspense } from 'react';

const Page1mcwfxh = lazy(() => import('./Page'));

const LazyPage1mcwfxh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mcwfxh />
  </Suspense>
);

export { LazyPage1mcwfxh };
