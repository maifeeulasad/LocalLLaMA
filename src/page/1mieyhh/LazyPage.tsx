import React, { lazy, Suspense } from 'react';

const Page1mieyhh = lazy(() => import('./Page'));

const LazyPage1mieyhh = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mieyhh />
  </Suspense>
);

export { LazyPage1mieyhh };
