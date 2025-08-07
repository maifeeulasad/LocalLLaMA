import React, { lazy, Suspense } from 'react';

const Page1mjvj3n = lazy(() => import('./Page'));

const LazyPage1mjvj3n = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjvj3n />
  </Suspense>
);

export { LazyPage1mjvj3n };
