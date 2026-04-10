import React from 'react';
import { getAllCategory } from '@/api/services/routemisr.service';
import ShopByCategoryClient from './ShopByCategoryClient';

export default async function ShopByCategory() {
  const allCategory = (await getAllCategory()) ?? [];

  return <ShopByCategoryClient allCategory={allCategory} />;
}