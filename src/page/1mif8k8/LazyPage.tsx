import React, { lazy, Suspense } from 'react';

const Page1mif8k8 = lazy(() => import('./Page'));

const LazyPage1mif8k8 = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Page1mif8k8 />
  </Suspense>
);

export { LazyPage1mif8k8 };
