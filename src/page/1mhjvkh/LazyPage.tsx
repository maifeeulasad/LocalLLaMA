import React, { lazy, Suspense } from 'react';

const Page1mhjvkh = lazy(() => import('./Page'));

const LazyPage1mhjvkh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mhjvkh />
  </Suspense>
);

export { LazyPage1mhjvkh };
