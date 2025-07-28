import React, { lazy, Suspense } from 'react';

const Page1mb7jrh = lazy(() => import('./Page'));

const LazyPage1mb7jrh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mb7jrh />
  </Suspense>
);

export { LazyPage1mb7jrh };
