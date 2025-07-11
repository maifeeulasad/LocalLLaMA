import React, { lazy, Suspense } from 'react';

const Page1lwphbh = lazy(() => import('./Page'));

const LazyPage1lwphbh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1lwphbh />
  </Suspense>
);

export { LazyPage1lwphbh };
