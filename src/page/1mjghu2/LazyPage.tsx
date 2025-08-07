import React, { lazy, Suspense } from 'react';

const Page1mjghu2 = lazy(() => import('./Page'));

const LazyPage1mjghu2 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mjghu2 />
  </Suspense>
);

export { LazyPage1mjghu2 };
