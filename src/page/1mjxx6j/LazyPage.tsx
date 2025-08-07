import React, { lazy, Suspense } from 'react';

const Page1mjxx6j = lazy(() => import('./Page'));

const LazyPage1mjxx6j = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjxx6j />
  </Suspense>
);

export { LazyPage1mjxx6j };
