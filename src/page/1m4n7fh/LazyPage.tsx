import React, { lazy, Suspense } from 'react';

const Page1m4n7fh = lazy(() => import('./Page'));

const LazyPage1m4n7fh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1m4n7fh />
  </Suspense>
);

export { LazyPage1m4n7fh };
