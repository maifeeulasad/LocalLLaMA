import React, { lazy, Suspense } from 'react';

const Page1mij7fh = lazy(() => import('./Page'));

const LazyPage1mij7fh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mij7fh />
  </Suspense>
);

export { LazyPage1mij7fh };
