import React, { lazy, Suspense } from 'react';

const Page1mjoo7w = lazy(() => import('./Page'));

const LazyPage1mjoo7w = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjoo7w />
  </Suspense>
);

export { LazyPage1mjoo7w };
