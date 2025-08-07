import React, { lazy, Suspense } from 'react';

const Page1mjuhgt = lazy(() => import('./Page'));

const LazyPage1mjuhgt = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjuhgt />
  </Suspense>
);

export { LazyPage1mjuhgt };
