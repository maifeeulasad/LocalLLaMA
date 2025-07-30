import React, { lazy, Suspense } from 'react';

const Page1md0gfh = lazy(() => import('./Page'));

const LazyPage1md0gfh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1md0gfh />
  </Suspense>
);

export { LazyPage1md0gfh };
