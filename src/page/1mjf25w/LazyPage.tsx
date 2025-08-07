import React, { lazy, Suspense } from 'react';

const Page1mjf25w = lazy(() => import('./Page'));

const LazyPage1mjf25w = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjf25w />
  </Suspense>
);

export { LazyPage1mjf25w };
