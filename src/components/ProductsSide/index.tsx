"use client";

import React, { useEffect, useState } from "react";

import styled from "./styled.module.css";
import ProductItem from "../ProductItem";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

import Link from "next/link";
import { fetchProducts } from "@/store/slice/products/ThunksUser";

export default function ProductsSide() {
  const dispatch = useAppDispatch();
  const page = useAppSelector((state) => state.products.currentPage);
  const pageProducts = useAppSelector((state) => state.products.products);
  useEffect(() => {
    dispatch<any>(fetchProducts(page));
  }, [page, dispatch]);

  console.log(pageProducts);

  return (
    <div className={styled.productSide}>
      <div>
        <h1 className={styled.titleProduct}>PRODUCTS</h1>
        <Link href="/shop/car">
          <h2>Car</h2>
        </Link>
      </div>

      <div className={styled.containerProducts}>
        {pageProducts.length !== 0 ? (
          pageProducts.map((value) => (
            <>
              <ProductItem key={value.id + "-key"} item={value} />
            </>
          ))
        ) : (
          <div>not found</div>
        )}
      </div>
    </div>
  );
}
