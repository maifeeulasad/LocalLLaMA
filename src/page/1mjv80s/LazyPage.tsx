import React, { lazy, Suspense } from 'react';

const Page1mjv80s = lazy(() => import('./Page'));

const LazyPage1mjv80s = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjv80s />
  </Suspense>
);

export { LazyPage1mjv80s };
