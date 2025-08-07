import React, { lazy, Suspense } from 'react';

const Page1mjud6n = lazy(() => import('./Page'));

const LazyPage1mjud6n = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjud6n />
  </Suspense>
);

export { LazyPage1mjud6n };
