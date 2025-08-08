import React, { lazy, Suspense } from 'react';

const Page1mjz0mm = lazy(() => import('./Page'));

const LazyPage1mjz0mm = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjz0mm />
  </Suspense>
);

export { LazyPage1mjz0mm };
