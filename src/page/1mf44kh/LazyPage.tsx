import React, { lazy, Suspense } from 'react';

const Page1mf44kh = lazy(() => import('./Page'));

const LazyPage1mf44kh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mf44kh />
  </Suspense>
);

export { LazyPage1mf44kh };
