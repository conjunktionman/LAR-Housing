import React from 'react';

export interface Property {
  id: number;
  plotNumber: string;
  name: string;
  bedrooms: number;
  sqFt: number;
  price: string;
  image: string;
  status: 'Available' | 'Reserved' | 'Sold';
}

export interface Amenity {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}