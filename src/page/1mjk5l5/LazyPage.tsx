import React, { lazy, Suspense } from 'react';

const Page1mjk5l5 = lazy(() => import('./Page'));

const LazyPage1mjk5l5 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjk5l5 />
  </Suspense>
);

export { LazyPage1mjk5l5 };
