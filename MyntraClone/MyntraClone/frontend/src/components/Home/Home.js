import React, { Fragment, CSSProperties, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import './home.css'
import b1 from '../images/banner1.webp'
import b2 from '../images/banner2.webp'
import b3 from '../images/banner3.jpg'
import b4 from '../images/banner4.jpg'
import b5 from '../images/banner5.jpg'
import b6 from '../images/banner6.webp'
import b7 from '../images/banner.7.webp'
import b8 from '../images/banner8.webp'
import b9 from '../images/banner9.webp'
import d1 from '../images/d1.webp'
import d2 from '../images/d2.webp'
import d3 from '../images/d3.webp'
import d4 from '../images/d4.webp'
import d5 from '../images/d5.webp'
import d6 from '../images/d6.webp'
import d7 from '../images/d7.webp'
import d8 from '../images/d8.webp'
import a1 from '../images/a1.webp'
import a2 from '../images/a2.webp'
import a3 from '../images/a3.webp'
import a4 from '../images/a4.webp'
import a5 from '../images/a5.webp'
import a6 from '../images/a6.webp'
import a7 from '../images/a7.webp'
import a8 from '../images/a8.webp'
import a9 from '../images/a9.webp'
import a10 from '../images/a10.webp'
import a11 from '../images/a11.webp'
import a12 from '../images/a12.webp'
import a13 from '../images/a13.webp'
import a14 from '../images/a14.webp'
import a15 from '../images/a15.webp'
import a16 from '../images/a16.webp'
import c1 from '../images/c1.webp'
import c2 from '../images/c2.webp'
import c3 from '../images/c3.webp'
import c4 from '../images/c4.webp'
import c5 from '../images/c5.webp'
import c6 from '../images/c6.webp'
import c7 from '../images/c7.webp'
import c8 from '../images/c8.webp'
import c9 from '../images/c9.webp'
import c10 from '../images/c10.webp'
import c11 from '../images/c11.webp'
import c12 from '../images/c12.webp'
import c13 from '../images/c13.webp'
import c14 from '../images/c14.webp'
import c15 from '../images/c15.webp'
import c16 from '../images/c16.webp'
import c17 from '../images/c17.webp'
import c18 from '../images/c18.webp'
import c19 from '../images/c19.webp'
import c20 from '../images/c20.webp'
import c21 from '../images/c21.webp'
import c22 from '../images/c22.webp'
import c23 from '../images/c23.webp'
import c24 from '../images/c24.webp'
import bb1 from '../images/b1.webp'
import bb2 from '../images/b2.webp'
import bb3 from '../images/b3.webp'
import bb4 from '../images/b4.webp'
import bb5 from '../images/b5.webp'
import bb6 from '../images/b6.webp'
import bb7 from '../images/b7.webp'
import e1 from '../images/e1.webp'
import e2 from '../images/e2.webp'
import e3 from '../images/e3.webp'
import e4 from '../images/e4.webp'
import e5 from '../images/e5.webp'
import e6 from '../images/e6.webp'
import e7 from '../images/e7.webp'
import e8 from '../images/e8.webp'
import e9 from '../images/e9.webp'
import e10 from '../images/e10.webp'
import e11 from '../images/e11.webp'
import e12 from '../images/e12.webp'
import e13 from '../images/e13.webp'
import e14 from '../images/e14.webp'
import e15 from '../images/e15.webp'
import e16 from '../images/e16.webp'
import e17 from '../images/e17.webp'
import e18 from '../images/e18.webp'
import e19 from '../images/e19.webp'
import e20 from '../images/e20.webp'
import e21 from '../images/e21.webp'
import e22 from '../images/e22.webp'
import e23 from '../images/e23.webp'
import e24 from '../images/e24.webp'
import f1 from '../images/f1.webp'
import f2 from '../images/f2.webp'
import f3 from '../images/f3.webp'
import f4 from '../images/f4.webp'
import f5 from '../images/f5.webp'
import f6 from '../images/f6.webp'
import f7 from '../images/f7.webp'
import f8 from '../images/f8.webp'
import f9 from '../images/f9.webp'
import f10 from '../images/f10.webp'
import f11 from '../images/f11.webp'
import f12 from '../images/f12.webp'
import f13 from '../images/f13.webp'
import f14 from '../images/f14.webp'
import g1 from '../images/g1.webp'
import g2 from '../images/g2.webp'
import g3 from '../images/g3.webp'
import g4 from '../images/g4.webp'
import g5 from '../images/g5.webp'
import g6 from '../images/g6.webp'
import g7 from '../images/g7.webp'
import g8 from '../images/g8.webp'
import g9 from '../images/g9.webp'
import g10 from '../images/g10.webp'
import g11 from '../images/g11.webp'
import g12 from '../images/g12.webp'
import g13 from '../images/g13.webp'
import g14 from '../images/g14.webp'
import g15 from '../images/g15.webp'
import g16 from '../images/g16.webp'
import h1 from '../images/h1.webp'
import h2 from '../images/h2.webp'
import h3 from '../images/h3.webp'
import h4 from '../images/h4.webp'
import h5 from '../images/h5.webp'
import h6 from '../images/h6.webp'
import h7 from '../images/h7.webp'
import h8 from '../images/h8.webp'
import h9 from '../images/h9.webp'
import h10 from '../images/h10.webp'
import h11 from '../images/h11.webp'
import h12 from '../images/h12.webp'
import h13 from '../images/h13.webp'
import h14 from '../images/h14.webp'
import h15 from '../images/h15.webp'
import h16 from '../images/h16.webp'
import i1 from '../images/i1.webp'
import i2 from '../images/i2.webp'
import i3 from '../images/i3.webp'
import i4 from '../images/i4.webp'
import i5 from '../images/i5.webp'
import j1 from '../images/j1.webp'
import j2 from '../images/j2.webp'
import j3 from '../images/j3.webp'
import j4 from '../images/j4.webp'
import k1 from '../images/k1.webp'
import k2 from '../images/k2.webp'
import k3 from '../images/k3.webp'
import k4 from '../images/k4.webp'
import k5 from '../images/k5.webp'
import k6 from '../images/k6.webp'
import k7 from '../images/k7.webp'
import k8 from '../images/k8.jpg'
import k9 from '../images/k9.webp'
import k10 from '../images/k10.webp'
import k11 from '../images/k11.webp'
import k12 from '../images/k12.jpg'
import k13 from '../images/k13.webp'
import k14 from '../images/k14.jpg'
import k15 from '../images/k15.webp'
import k16 from '../images/k16.webp'
import l1 from '../images/l1.jpg'
import l2 from '../images/l2.jpg'
import l3 from '../images/l3.jpg'
import l4 from '../images/l4.jpg'
import l5 from '../images/l5.jpg'
import l6 from '../images/l6.jpg'
import l7 from '../images/l7.jpg'
import m1 from '../images/m1.webp'
import m2 from '../images/m2.webp'
import m3 from '../images/m3.webp'
import m4 from '../images/m4.webp'
import m5 from '../images/m5.webp'
import m6 from '../images/m6.webp'
import m7 from '../images/m7.webp'
import m8 from '../images/m8.webp'
import n1 from '../images/n1.webp'
import n2 from '../images/n2.webp'
import n3 from '../images/n3.jpg'
import n4 from '../images/n4.webp'
import n5 from '../images/n5.webp'
import n6 from '../images/n6.webp'
import n7 from '../images/n7.webp'
import n8 from '../images/n8.webp'
import o1 from '../images/o1.webp'
import o2 from '../images/o2.webp'
import o3 from '../images/o3.webp'
import o4 from '../images/o4.webp'
import o5 from '../images/o5.webp'
import o6 from '../images/o6.webp'
import o7 from '../images/o7.jpg'
import p1 from '../images/p1.webp'
import p2 from '../images/p2.webp'
import p3 from '../images/p3.webp'
import p4 from '../images/p4.webp'
import p5 from '../images/p5.webp'
import p6 from '../images/p6.webp'
import p7 from '../images/p7.webp'
import p8 from '../images/p8.webp'
import q1 from '../images/q1.webp'
import q2 from '../images/q2.webp'
import q3 from '../images/q3.webp'
import q4 from '../images/q4.webp'
import q5 from '../images/q5.webp'
import q6 from '../images/q6.webp'
import q7 from '../images/q7.webp'
import q8 from '../images/q8.webp'
import r1 from '../images/r1.webp'
import r2 from '../images/r2.webp'
import r3 from '../images/r3.webp'
import r4 from '../images/r4.webp'
import r5 from '../images/r5.webp'
import r6 from '../images/r6.webp'
import r7 from '../images/r7.webp'
import r8 from '../images/r8.webp'
import s1 from '../images/s1.webp'
import s2 from '../images/s2.webp'
import s3 from '../images/s3.webp'
import s4 from '../images/s4.webp'
import s5 from '../images/s5.webp'
import s6 from '../images/s6.webp'
import s7 from '../images/s7.webp'
import s8 from '../images/s8.webp'
import t1 from '../images/t1.webp'
import t2 from '../images/t2.webp'
import t3 from '../images/t3.webp'
import t4 from '../images/t4.webp'
import t5 from '../images/t5.webp'
import t6 from '../images/t6.webp'
import t7 from '../images/t7.webp'
import t8 from '../images/t8.webp'
import u1 from '../images/u1.webp'
import u2 from '../images/u2.webp'
import u3 from '../images/u3.webp'
import u4 from '../images/u4.jpg'
import u5 from '../images/u5.webp'
import u6 from '../images/u6.webp'
import u7 from '../images/u7.webp'
import u8 from '../images/u8.webp'
import mb1 from '../images/mb1.jpg'
import mb2 from '../images/mb2.jpg'
import mb3 from '../images/mb3.jpg'
import ma1 from '../images/ma1.webp'
import ma2 from '../images/ma2.webp'
import ma3 from '../images/ma3.webp'
import ma4 from '../images/ma4.webp'
import ma5 from '../images/ma5.webp'
import ma6 from '../images/ma6.webp'
import ma7 from '../images/ma7.webp'
import ma8 from '../images/ma8.webp'
import ma9 from '../images/ma9.webp'
import ma10 from'../images/ma10.webp'
import ma11 from'../images/ma11.webp'
import mm3 from'../images/mm3.jpg'
import mad1 from '../images/mad1.jpg'
import mm1_1 from '../images/mm1-1.gif'
import mm1_2 from '../images/mm1-2.gif'
import mm2_1 from '../images/mm2-1.gif'
import mm2_2 from '../images/mm2-2.gif'
import mc1 from '../images/mc1.webp'
import mc2 from '../images/mc2.webp'
import mc3 from '../images/mc3.webp'
import mc4 from '../images/mc4.jpg'
import mc5 from '../images/mc5.webp'
import mc6 from '../images/mc6.webp'
import mc7 from '../images/mc7.webp'
import mc8 from '../images/mc8.webp'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Footer from '../Footer/Footer'


const Home = () => {

  const indicatorStyles: CSSProperties = {
    background: '#CFCECD',
    width: 7,
    height: 7,
    borderRadius: 50,
    display: 'inline-block',
    margin: '0 4px 0 4px',
    zIndex: 8
  };
  // #CFCECD
  function indicator(onClickHandler, isSelected, index, label) {
    if (isSelected) {
      return (
        <li
          style={{ ...indicatorStyles, background: '#9f9f9f' }}
          aria-label={`Selected: ${label} ${index + 1}`}
          title={`Selected: ${label} ${index + 1}`}
        />
      );
    }



    return (

      <li
        style={{ ...indicatorStyles }}
        onClick={onClickHandler}
        onKeyDown={onClickHandler}
        value={index}
        key={index}
        role="button"
        tabIndex={0}
        title={`${label} ${index + 1}`}
        aria-label={`${label} ${index + 1}`}
      />
    );
  }

  useEffect(() => {
    document.documentElement.scrollTo = 0;
  }, []);

  const womensData =[
    {
      "id": 1,
      "image_url": "https://bit.ly/3uHGEnN",
      "brand": "Anouk",
      "para": "Women Pink Self Design Kurta with Trousers & Dupatta",
      "rs": 791,
      "price": "Rs. 791",
      "strikedoffprice": "Rs. 3298",
      "offer": "(76% OFF)",
      "wishList": "WISHLIST ♡",
      "addToBag": "ADD TO BAG"
    },
    {
      "id": 2,
      "image_url": "https://bit.ly/3uLGTyi",
      "brand": "Anouk",
      "para": "Women yellow Self Design Kurta with Trousers & Dupatta",
      "rs": 758,
      "price": "Rs. 758",
      "strikedoffprice": "Rs. 3299",
      "offer": "(65% OFF)",
      "wishList": "WISHLIST ♡",
      "addToBag": "ADD TO BAG"
    },
    {
      "id": 3,
      "image_url": "https://bit.ly/3Dldqit",
      "brand": "Anouk",
      "para": "Green Ethnic Motifs Pure Cotton Printed Fit and Flare Dress",
      "rs": 749,
      "price": "Rs. 749",
      "strikedoffprice": "Rs. 1299",
      "offer": "(65% OFF)",
      "wishList": "WISHLIST  ♡",
      "addToBag": "ADD TO BAG"
    },
    {
      "id": 4,
      "image_url": "https://bit.ly/3iNMWwx",
      "brand": "Chevron",
      "para": "Black & Grey Chevron Geometric Printed Wrap Dress",
      "rs": 1199,
      "price": "Rs. 1199",
      "strikedoffprice": "Rs. 2599",
      "offer": "(65% OFF)",
      "wishList": "WISHLIST ♡",
      "addToBag": "ADD TO BAG"
    },
    {
      "id": 5,
      "image_url": "https://bit.ly/3IQuE8v",
      "brand": "Anouk",
      "para": "Women Olive Green Ethnic Motifs Yoke Design Kurta with Palazzos & With Dupatta",
      "rs": 879,
      "price": "Rs. 879",
      "strikedoffprice": "Rs. 2499",
      "offer": "(65% OFF)",
      "wishList": "WISHLIST ♡",
      "addToBag": "ADD TO BAG"
    },
    {
      "id": 6,
      "image_url": "https://bit.ly/3IRLbJa",
      "brand": "MFB",
      "para": "Women Maroon Analogue Watch MFB-PN-SNT-C30-1",
      "rs": 674,
      "price": "Rs. 674",
      "strikedoffprice": "Rs. 1499",
      "offer": "(65% OFF)",
      "wishList": "WISHLIST ♡",
      "addToBag": "ADD TO BAG"
    },
    {
      "id": 7,
      "image_url": "https://bit.ly/3wYoUqM",
      "brand": "Anouk",
      "para": "Women Black Pure Cotton Ethnic Motifs Printed Kurta with Palazzos & Dupatta",
      "rs": 1035,
      "price": "Rs. 1035",
      "strikedoffprice": "Rs. 2799",
      "offer": "(63% OFF)",
      "wishList": "WISHLIST ♡",
      "addToBag": "ADD TO BAG"
    },
    {
      "id": 8,
      "image_url": "https://bit.ly/3wXtNAx",
      "brand": "Nayo",
      "para": "Women Red Floral Printed Kurta With Trouser & Dupatta",
      "rs": 1479,
      "price": "Rs. 1479",
      "strikedoffprice": "Rs. 3699",
      "offer": "(60% OFF)",
      "wishList": "WISHLIST ♡",
      "addToBag": "ADD TO BAG"
    },
    {
      "id": 9,
      "image_url": "https://bit.ly/37aGnRW",
      "brand": "Yash gallery",
      "para": "Women Blue & White Printed A-Line Kurta",
      "rs": 805,
      "price": "Rs. 805",
      "strikedoffprice": "Rs. 1299",
      "offer": "(65% OFF)",
      "wishList": "WISHLIST ♡",
      "addToBag": "ADD TO BAG"
    },
    {
      "id": 10,
      "image_url": "https://bit.ly/3wUyQli",
      "brand": "Juniper",
      "para": "Women Charming Maroon Ethnic Motifs Bling It On Dress",
      "rs": 489,
      "price": "Rs. 489",
      "strikedoffprice": "Rs. 999",
      "offer": "(65% OFF)",
      "wishList": "WISHLIST ♡",
      "addToBag": "ADD TO BAG"
    },
    {
      "id": 11,
      "image_url": "https://bit.ly/3uMmnxi",
      "brand": "Sngria",
      "para": "Black& Mustard Yellow Pure Cotton Ethnic Motifs Printed A-Line Dress",
      "rs": 799,
      "price": "Rs. 799",
      "strikedoffprice": "Rs. 1199",
      "offer": "(65% OFF)",
      "wishList": "WISHLIST ♡",
      "addToBag": "ADD TO BAG"
    },
    {
      "id": 12,
      "image_url": "https://bit.ly/3IZknGX",
      "brand": "Juniper",
      "para": "Women Black & Gold-Toned Printed Flared Palazzos",
      "rs": 883,
      "price": "Rs. 883",
      "strikedoffprice": "Rs. 1699",
      "offer": "(43% OFF)",
      "wishList": "WISHLIST ♡",
      "addToBag": "ADD TO BAG"
    },
    {
      "id": 13,
      "image_url": "https://bit.ly/35xpQr3",
      "brand": "Juniper",
      "para": "Women Lime Green & White Striped Flared Palazzos",
      "rs": 594,
      "price": "Rs. 594",
      "strikedoffprice": "Rs. 1699",
      "offer": "(65% OFF)",
      "wishList": "WISHLIST ♡",
      "addToBag": "ADD TO BAG"
    },
    {
      "id": 14,
      "image_url": "https://bit.ly/3iUMb4X",
      "brand": "Juniper",
      "para": "Women Off-White & Gold-Coloured Printed Flared Palazzos",
      "rs": 499,
      "price": "Rs. 499",
      "strikedoffprice": "Rs. 1249",
      "offer": "(65% OFF)",
      "wishList": "WISHLIST ♡",
      "addToBag": "ADD TO BAG"
    },
    {
      "id": 15,
      "image_url": "https://bit.ly/36I0Myd",
      "brand": "Juniper",
      "para": "Women White Chikankari Embroidered Flared Palazzos",
      "rs": 997,
      "price": "Rs. 997",
      "strikedoffprice": "Rs. 2850",
      "offer": "(65% OFF)",
      "wishList": "WISHLIST ♡",
      "addToBag": "ADD TO BAG"
    },
    {
      "id": 16,
      "image_url": "https://bit.ly/3DwTnO0",
      "brand": "Arrabi",
      "para": "Women Blue Ethnic Motifs Embroidered Knitted Cropped Ethnic Palazzos",
      "rs": 554,
      "price": "Rs. 554",
      "strikedoffprice": "Rs. 1499",
      "offer": "(65% OFF)",
      "wishList": "WISHLIST ♡",
      "addToBag": "ADD TO BAG"
    },
    {
      "id": 17,
      "image_url": "https://bit.ly/3v7U4K7",
      "brand": "Juniper",
      "para": "Maroon Embroidered Semi-Stitched Lehenga & Unstitched Blouse with Dupatta",
      "rs": 3999,
      "price": "Rs. 3999",
      "strikedoffprice": "Rs. 10000",
      "offer": "(Rs. 60001 OFF)",
      "wishList": "WISHLIST ♡",
      "addToBag": "ADD TO BAG"
    },
    {
      "id": 18,
      "image_url": "https://bit.ly/3iXV6Cw",
      "brand": "Juniper",
      "para": "Beige & Golden Embellished Sequinned Semi-Stitched Lehenga Set",
      "rs": 5100,
      "price": "Rs. 5100",
      "strikedoffprice": "Rs. 6800",
      "offer": "(25% OFF)",
      "wishList": "WISHLIST ♡",
      "addToBag": "ADD TO BAG"
    },
    {
      "id": 19,
      "image_url": "https://bit.ly/3DvsXfI",
      "brand": "Chevron",
      "para": "Black Embellished Sequinned Semi-Stitched Lehenga & Unstitched Blouse With Dupatta",
      "rs": 2457,
      "price": "Rs. 2457",
      "strikedoffprice": "Rs. 3330",
      "offer": "(25% OFF)",
      "wishList": "WISHLIST ♡",
      "addToBag": "ADD TO BAG"
    },
    {
      "id": 20,
      "image_url": "https://bit.ly/3wYy1Im",
      "brand": "Chevron",
      "para": "Pink Embellished Sequinned Semi-Stitched Lehenga & Unstitched Blouse With Dupatta",
      "rs": 2319,
      "price": "Rs. 2319",
      "strikedoffprice": "Rs. 7999",
      "offer": "(71% OFF)",
      "wishList": "WISHLIST ♡",
      "addToBag": "ADD TO BAG"
    },
    {
      "id": 21,
      "image_url": "https://bit.ly/35wbrLE",
      "brand": "Chevron",
      "para": "24K Gold-Plated White & Red Stone-Studded Beaded Jewellery Set",
      "rs": 2080,
      "price": "Rs. 2080",
      "strikedoffprice": "Rs. 6500",
      "offer": "(20% OFF)",
      "wishList": "WISHLIST ♡",
      "addToBag": "ADD TO BAG"
    },
    {
      "id": 22,
      "image_url": "https://bit.ly/3DvtdeG",
      "brand": "Chevron",
      "para": "Gold-Plated Pink & Green Enamelled Beaded Kundan-Studded Handcrafted Jewellery Set",
      "rs": 4448,
      "price": "Rs. 4448",
      "strikedoffprice": "Rs. 6390",
      "offer": "(65% OFF)",
      "wishList": "WISHLIST ♡",
      "addToBag": "ADD TO BAG"
    },
    {
      "id": 23,
      "image_url": "https://bit.ly/3wVpBRV",
      "brand": "Chevron",
      "para": "Gold-Toned & Pink CZ Stone-Studded Jewellery Set",
      "rs": 539,
      "price": "Rs. 539",
      "strikedoffprice": "Rs. 2998",
      "offer": "(65% OFF)",
      "wishList": "WISHLIST ♡",
      "addToBag": "ADD TO BAG"
    },
    {
      "id": 24,
      "image_url": "https://bit.ly/3wUhtRH",
      "brand": "Chevron",
      "para": "Green & Pink Gold-Plated Kundan-Studded Handcrafted Jewellery Set",
      "rs": 894,
      "price": "Rs. 894",
      "strikedoffprice": "Rs. 2360",
      "offer": "(65% OFF)",
      "wishList": "WISHLIST ♡",
      "addToBag": "ADD TO BAG"
    },
    {
      "id": 25,
      "image_url": "https://bit.ly/3Dv4h6W",
      "brand": "MFB",
      "para": "Mustard Yellow & Red Bandhani Print Saree",
      "rs": 1799,
      "price": "Rs. 1799",
      "strikedoffprice": "Rs. 2199",
      "offer": "(65% OFF)",
      "wishList": "WISHLIST ♡",
      "addToBag": "ADD TO BAG"
    },
    {
      "id": 26,
      "image_url": "https://bit.ly/3NGRzXv",
      "brand": "Sangria",
      "para": "Navy Blue Solid Saree",
      "rs": 489,
      "price": "Rs. 489",
      "strikedoffprice": "Rs. 999",
      "offer": "(65% OFF)",
      "wishList": "WISHLIST ♡",
      "addToBag": "ADD TO BAG"
    },
    {
      "id": 27,
      "image_url": "https://bit.ly/3DBhHP0",
      "brand": "Sangria",
      "para": "Burgundy Sequinned Satin Saree",
      "rs": 549,
      "price": "Rs. 549",
      "strikedoffprice": "Rs. 999",
      "offer": "(65% OFF)",
      "wishList": "WISHLIST ♡",
      "addToBag": "ADD TO BAG"
    },
    {
      "id": 28,
      "image_url": "https://bit.ly/35vC57k",
      "brand": "MFB",
      "para": "Teal Blue Solid Accordian Pleat Ruffles Saree with Embroidered Blouse",
      "rs": 599,
      "price": "Rs. 599",
      "strikedoffprice": "Rs. 1999",
      "offer": "(65% OFF)",
      "wishList": "WISHLIST ♡",
      "addToBag": "ADD TO BAG"
    },
    {
      "id": 29,
      "image_url": "https://bit.ly/3uGJsBy",
      "brand": "MFB",
      "para": "Black Embroidered Ethnic Motifs A-Line Dress",
      "rs": 159,
      "price": "Rs. 159",
      "strikedoffprice": "Rs. 199",
      "offer": "(65% OFF)",
      "wishList": "WISHLIST ♡",
      "addToBag": "ADD TO BAG"
    },
    {
      "id": 30,
      "image_url": "https://bit.ly/3v7Vmor",
      "brand": "MFB",
      "para": "Women Beige Printed Shirt Dress",
      "rs": 879,
      "price": "Rs. 879",
      "strikedoffprice": "Rs. 1699",
      "offer": "(65% OFF)",
      "wishList": "WISHLIST ♡",
      "addToBag": "ADD TO BAG"
    },
    {
      "id": 31,
      "image_url": "https://bit.ly/3wWha8K",
      "brand": "MFB",
      "para": "Women Beige Printed Shirt Dress",
      "rs": 1049,
      "price": "Rs. 1049",
      "strikedoffprice": "Rs. 2599",
      "offer": "(65% OFF)",
      "wishList": "WISHLIST ♡",
      "addToBag": "ADD TO BAG"
    },
    {
      "id": 32,
      "image_url": "https://bit.ly/37bUbfj",
      "brand": "Sngria",
      "para": "Beige & Gold-Toned Floral Embroidered & Sequinned Box Clutches",
      "rs": 749,
      "price": "Rs. 749",
      "strikedoffprice": "Rs. 1599",
      "offer": "(65% OFF)",
      "wishList": "WISHLIST ♡",
      "addToBag": "ADD TO BAG"
    },
    {
      "id": 33,
      "image_url": "https://bit.ly/3iX4lTz",
      "brand": "Nayo",
      "para": "Gold-Plated Clustered Pearls Cuff Bracelet",
      "rs": 554,
      "price": "Rs. 554",
      "strikedoffprice": "Rs. 1599",
      "offer": "(65% OFF)",
      "wishList": "WISHLIST ♡",
      "addToBag": "ADD TO BAG"
    },
    {
      "id": 34,
      "image_url": "https://bit.ly/3wXwlP7",
      "brand": "Nayo",
      "para": "Gold-Toned & White Kundan & Pearl Studded Ring Bracelet",
      "rs": 949,
      "price": "Rs. 949",
      "strikedoffprice": "Rs. 2599",
      "offer": "(65% OFF)",
      "wishList": "WISHLIST ♡",
      "addToBag": "ADD TO BAG"
    },
    {
      "id": 35,
      "image_url": "https://bit.ly/3NEADRn",
      "brand": "Nayo",
      "para": "Women Silver-Toned Oxidised Cuff Bracelet",
      "rs": 623,
      "price": "Rs. 623",
      "strikedoffprice": "Rs. 2599",
      "offer": "(65% OFF)",
      "wishList": "WISHLIST ♡",
      "addToBag": "ADD TO BAG"
    },
    {
      "id": 36,
      "image_url": "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11715910/2020/12/9/9442c1af-94fd-4c60-b9c8-044ed39535ec1607497230477-Rubans-Women-Silver-Plated-Oxidised-Elasticated-Bracelet-485-1.jpg",
      "brand": "Yoke",
      "para": "Women Silver-Plated Oxidised Elasticated Bracelet",
      "rs": 899,
      "price": "Rs. 899",
      "strikedoffprice": "Rs. 2999",
      "offer": "(65% OFF)",
      "wishList": "WISHLIST ♡",
      "addToBag": "ADD TO BAG"
    }
  ]

const [selectedProduct, setSelectedProduct] = useState(null);
const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      {
        window.screen.width > 1024 ?

          <Fragment>
            <div className='mt-8 w-[100vw]'>
              <Carousel showThumbs={false} showStatus={false} showArrows={false} showIndicators={true} autoPlay={6000} infiniteLoop={true} renderIndicator={(onClickHandler, isSelected, index, label) => indicator(onClickHandler, isSelected, index, label)}>
                <div>

                  <Link to='/products'><LazyLoadImage effect='blur' src={b1} width='100%' className='min-h-[320px]' alt='Banner_Image' /></Link>
                  <div className='h-[50px]'>

                  </div>


                </div>
                <div>
                  <Link to='/products'><LazyLoadImage effect='blur' src={b2} width='100%' className='min-h-[320px]' alt='Banner_Image' /></Link>
                  <div className='h-[50px]'>

                  </div>
                </div>
                <div>
                  <Link to='/products'><LazyLoadImage effect='blur' src={b3} width='100%' className='min-h-[320px]' alt='Banner_Image' /><br /></Link>
                  <div className='h-[50px]'>

                  </div>
                </div>
                <div>
                  <Link to='/products'><LazyLoadImage effect='blur' src={b4} width='100%' className='min-h-[320px]' alt='Banner_Image' /></Link>
                  <div className='h-[50px]'>

                  </div>
                </div>
                <div>
                  <Link to='/products'><LazyLoadImage effect='blur' src={b5} width='100%' className='min-h-[320px]' alt='Banner_Image' /></Link>
                  <div className='h-[50px]'>

                  </div>
                </div>
                <div>
                  <Link to='/products'><LazyLoadImage effect='blur' src={b6} width='100%' className='min-h-[320px]' alt='Banner_Image' /></Link>
                  <div className='h-[50px]'>

                  </div>
                </div>
                <div>
                  <Link to='/products'><LazyLoadImage effect='blur' src={b7} width='100%' className='min-h-[320px]' alt='Banner_Image' /></Link>
                  <div className='h-[50px]'>

                  </div>
                </div>
                <div>
                  <Link to='/products'><LazyLoadImage effect='blur' src={b8} width='100%' className='min-h-[320px]' alt='Banner_Image' /></Link>
                  <div className='h-[50px]'>

                  </div>
                </div>
                <div>
                  <Link to='/products'><LazyLoadImage effect='blur' src={b9} width='100%' className='min-h-[320px]' alt='Banner_Image' /></Link>
                  <div className='h-[50px]'>

                  </div>
                </div>
              </Carousel>
            </div>
            <div>
              <h1 className='text-3xl px-8 font-bold font1 tracking-widest text-slate-800 mb-8'>DEAL OF THE DAY</h1>
              <div className='grid grid-cols-8'>
                <Link to='/products'><LazyLoadImage effect='blur' src={d1} alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={d2} alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={d3} alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={d4} alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={d5} alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={d6} alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={d7} alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={d8} alt="" className="min-h-[200px]" /></Link>
              </div>
            </div>
            <div>
              <h1 className='text-3xl px-8 font-bold font1 tracking-widest text-slate-800 mb-8 mt-8'>BEST OF MYNTRA EXCLUSIVE BRANDS</h1>
              <div className='grid grid-cols-8 gap-1'>
                <Link to='/products'><LazyLoadImage effect='blur' src={a1} alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={a2} alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={a3} alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={a4} alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={a5} alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={a6} alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={a7} alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={a8} alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={a9} alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={a10} alt=""className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={a11} alt=""className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={a12} alt=""className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={a13} alt=""className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={a14} alt=""className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={a15} alt=""className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={a16} alt=""className="min-h-[200px]" /></Link>
              </div>
            </div>

            <div>
              <h1 className='text-3xl px-8 font-bold font1 tracking-widest text-slate-800 mb-8 mt-8'>TOP PICKS</h1>
              <div className='grid grid-cols-7 gap-2'>
                <Link to='/products'><LazyLoadImage effect='blur' src={bb1} alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={bb2} alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={bb3} alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={bb4} alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={bb5} alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={bb6} alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={bb7} alt="" className="min-h-[200px]" /></Link>

              </div>
            </div>

            <div>
              <h1 className='text-3xl px-8 font-bold font1 tracking-widest text-slate-800 mb-8 mt-8'>CATEGORIES TO BAG</h1>
              <div className='grid grid-cols-8 gap-1'>
                <Link to='/products'><LazyLoadImage effect='blur' src={c1 } alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={c2 } alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={c3 } alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={c4 } alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={c5 } alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={c6 } alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={c7 } alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={c8 } alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={c9 } alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={c10} alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={c11} alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={c12} alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={c13} alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={c14} alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={c15} alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={c16} alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={c17} alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={c18} alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={c19} alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={c20} alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={c21} alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={c22} alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={c23} alt="" className="min-h-[200px]" /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={c24} alt="" className="min-h-[200px]" /></Link>

              </div>
            </div>

            <div>
              <h1 className='text-3xl px-8 font-bold font1 tracking-widest text-slate-800 mb-8 mt-8'>DEALS ON TOP BRANDS</h1>
              <div className='grid grid-cols-5 gap-1'>
              {womensData.map((product, index) => (
          <div key={index} className='col-span-1 p-4 border rounded-lg'>
            <img src={product.image_url} alt={product.para} className='w-full h-auto' />
            <h2 className='font-bold mt-2'>{product.brand}</h2>
            <p className='text-gray-600'>{product.para}</p>
            <p className='font-semibold'>{product.price} <span className='line-through text-gray-400'>{product.strikedoffprice}</span> <span className='text-red-500'>{product.offer}</span></p>
            <button className='mt-2 mr-4 p-2 bg-pink-500 text-white rounded'>{product.addToBag}</button>
            <button className='mt-2 p-2 bg-pink-500 text-white rounded' onClick={
              () => {
                setShowModal(true);
                setSelectedProduct(product);
              }
            }>Share</button>
            {/* <button className='mt-2 p-2 text-blue-500'>{product.wishList}</button> */}
          </div>
        ))}
         <Modal showModal={showModal} setShowModal={setShowModal} selectedProduct={selectedProduct} />
              </div>
            </div>

            <div>
              <h1 className='text-3xl px-8 font-bold font1 tracking-widest text-slate-800 mb-8 mt-8'>BRANDS AT SLASHED PRICES</h1>
              <div className='grid grid-cols-7 gap-1'>
                <Link to='/products'><LazyLoadImage effect='blur' src={f1} alt=""  className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={f2} alt=""  className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={f3} alt=""  className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={f4} alt=""  className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={f5} alt=""  className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={f6} alt=""  className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={f7} alt=""  className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={f8} alt=""  className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={f9} alt=""  className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={f10} alt="" className='min-h-[200px]' /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={f11} alt="" className='min-h-[200px]' /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={f12} alt="" className='min-h-[200px]' /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={f13} alt="" className='min-h-[200px]' /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={f14} alt="" className='min-h-[200px]' /></Link>

              </div>
            </div>

            <div>
              <h1 className='text-3xl px-8 font-bold font1 tracking-widest text-slate-800 mb-8 mt-8'>BEST BUYS</h1>
              <div className='grid grid-cols-8 gap-1'>
                <Link to='/products'><LazyLoadImage effect='blur' src={g1} alt=""  className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={g2} alt=""  className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={g3} alt=""  className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={g4} alt=""  className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={g5} alt=""  className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={g6} alt=""  className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={g7} alt=""  className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={g8} alt=""  className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={g9} alt=""  className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={g10} alt="" className='min-h-[200px]' /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={g11} alt="" className='min-h-[200px]' /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={g12} alt="" className='min-h-[200px]' /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={g13} alt="" className='min-h-[200px]' /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={g14} alt="" className='min-h-[200px]' /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={g15} alt="" className='min-h-[200px]' /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={g16} alt="" className='min-h-[200px]' /></Link>

              </div>
            </div>

            <div>
              <h1 className='text-3xl px-8 font-bold font1 tracking-widest text-slate-800 mb-8 mt-8'>MYNTRA LUXE</h1>
              <div className='grid grid-cols-8 gap-1'>
                <Link to='/products'><LazyLoadImage effect='blur' src={h1} alt=""  className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={h2} alt=""  className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={h3} alt=""  className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={h4} alt=""  className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={h5} alt=""  className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={h6} alt=""  className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={h7} alt=""  className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={h8} alt=""  className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={h9} alt=""  className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={h10} alt="" className='min-h-[200px]' /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={h11} alt="" className='min-h-[200px]' /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={h12} alt="" className='min-h-[200px]' /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={h13} alt="" className='min-h-[200px]' /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={h14} alt="" className='min-h-[200px]' /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={h15} alt="" className='min-h-[200px]' /></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={h16} alt="" className='min-h-[200px]' /></Link>

              </div>
            </div>

            <div>
              <h1 className='text-3xl px-8 font-bold font1 tracking-widest text-slate-800 mb-8 mt-8'>GIFTING CARDS</h1>
              <div className='grid grid-cols-5 '>
                <Link to='/products'><LazyLoadImage effect='blur' src={i1} alt="" className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={i2} alt="" className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={i3} alt="" className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={i4} alt="" className='min-h-[200px]'/></Link>
                <Link to='/products'><LazyLoadImage effect='blur' src={i5} alt="" className='min-h-[200px]'/></Link>

              </div>
            </div>

            <Footer/>

          </Fragment>

          :

          <Fragment>

            <div className='bg-white '>
              <ul className='flex overflow-x-scroll '>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={ma1} alt="" className="w-[18vw] min-h-[70px]" /></li></Link>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={ma2} alt="" className="w-[18vw] min-h-[70px]" /></li></Link>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={ma3} alt="" className="w-[18vw] min-h-[70px]" /></li></Link>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={ma4} alt="" className="w-[18vw] min-h-[70px]" /></li></Link>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={ma5} alt="" className="w-[18vw] min-h-[70px]" /></li></Link>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={ma6} alt="" className="w-[18vw] min-h-[70px]" /></li></Link>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={ma7} alt="" className="w-[18vw] min-h-[70px]" /></li></Link>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={ma8} alt="" className="w-[18vw] min-h-[70px]" /></li></Link>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={ma9} alt="" className="w-[18vw] min-h-[70px]" /></li></Link>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={ma10} alt=""className="w-[18vw] min-h-[70px]" /></li></Link>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={ma11} alt=""className="w-[18vw] min-h-[70px]" /></li></Link>
              </ul>
            </div>

            <div>
              <LazyLoadImage effect='blur' src={mm3} alt=""  className='mt-2 min-h-[100px]'/>
            </div>

            <div className='mt-4 w-[100vw]'>
              <Carousel showThumbs={false} showStatus={false} showArrows={false} showIndicators={true} renderIndicator={(onClickHandler, isSelected, index, label) => indicator(onClickHandler, isSelected, index, label)}>
                <Link to='/products'>
                  <div>
                    <LazyLoadImage effect='blur' src={mb1} width='100%' alt='Banner_Image' className='min-h-[200px]'/>
                    <div className='h-[30px]'>
                    </div>
                  </div>
                </Link>
                <Link to='/products'>
                  <div>
                    <LazyLoadImage effect='blur' src={mb2} width='100%' alt='Banner_Image' className='min-h-[200px]'/>
                    <div className='h-[30px]'>

                    </div>
                  </div>
                </Link>
                <Link to='/products'>
                  <div>
                    <LazyLoadImage effect='blur' src={mb3} width='100%' alt='Banner_Image' className='min-h-[200px]'/><br />
                    <div className='h-[30px]'>

                    </div>
                  </div>
                </Link>

              </Carousel>
            </div>

            <div>
              <h1 className='text-xl px-8 font-bold font1 text-center text-slate-800 mb-6 mt-6'>DEAL OF THE DAY</h1>
              <ul className='flex overflow-x-scroll '>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={d1} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={d2} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={d3} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={d4} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={d5} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={d6} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={d7} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={d8} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
              </ul>
            </div>

            <div>
              <h1 className='text-xl px-8 font-bold font1 text-center text-slate-800 mb-6 mt-6'>BEST OF MYNTRA EXCLUSIVE BRANDS</h1>
              <ul className='flex overflow-x-scroll '>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={a1} alt=""  className="w-[50vw] min-h-[200px]" /></li></Link>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={a2} alt=""  className="w-[50vw] min-h-[200px]" /></li></Link>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={a3} alt=""  className="w-[50vw] min-h-[200px]" /></li></Link>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={a4} alt=""  className="w-[50vw] min-h-[200px]" /></li></Link>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={a5} alt=""  className="w-[50vw] min-h-[200px]" /></li></Link>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={a6} alt=""  className="w-[50vw] min-h-[200px]" /></li></Link>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={a7} alt=""  className="w-[50vw] min-h-[200px]" /></li></Link>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={a8} alt=""  className="w-[50vw] min-h-[200px]" /></li></Link>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={a9} alt=""  className="w-[50vw] min-h-[200px]" /></li></Link>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={a10} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={a11} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={a12} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={a13} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={a14} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={a15} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={a16} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>

              </ul>
            </div>

            
            <div>
              <h1 className='text-xl px-8 font-bold font1 text-center text-slate-800 mb-6 mt-6'>TOP PICKS</h1>
              <ul className='flex overflow-x-scroll '>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={bb1} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={bb2} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={bb3} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={bb4} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={bb5} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={bb6} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
                <Link to='/products'><li className='w-max mr-2'><LazyLoadImage effect='blur' src={bb7} alt="" className="w-[50vw] min-h-[200px]" /></li></Link>
               
              </ul>
            </div>

            <div className='mt-4 grid grid-cols-2 min-h-[200px]'>
              <LazyLoadImage effect='blur' src={mm1_1} alt="" />
              <LazyLoadImage effect='blur' src={mm1_2} alt="" />
            </div>

            <div>
              <LazyLoadImage effect='blur' src={mad1} alt="" />
            </div>

            <div className='mt-4 grid grid-cols-2 min-h-[200px]'>
              <LazyLoadImage effect='blur' src={mm2_1} alt="" />
              <LazyLoadImage effect='blur' src={mm2_2} alt="" />
            </div>

            <div>
              <h1 className='text-xl px-8 font-bold font1 text-center text-slate-800 mb-6 mt-6'>CATEGORIES TO BAG</h1>
              <ul className='grid grid-cols-3 '>
                <Link to='/products'><li className=''><LazyLoadImage effect='blur' src={c1 } alt="" className="min-h-[100px]" /></li></Link>
                <Link to='/products'><li className=''><LazyLoadImage effect='blur' src={c2 } alt="" className="min-h-[100px]" /></li></Link>
                <Link to='/products'><li className=''><LazyLoadImage effect='blur' src={c3 } alt="" className="min-h-[100px]" /></li></Link>
                <Link to='/products'><li className=''><LazyLoadImage effect='blur' src={c4 } alt="" className="min-h-[100px]" /></li></Link>
                <Link to='/products'><li className=''><LazyLoadImage effect='blur' src={c5 } alt="" className="min-h-[100px]" /></li></Link>
                <Link to='/products'><li className=''><LazyLoadImage effect='blur' src={c6 } alt="" className="min-h-[100px]" /></li></Link>
                <Link to='/products'><li className=''><LazyLoadImage effect='blur' src={c7 } alt="" className="min-h-[100px]" /></li></Link>
                <Link to='/products'><li className=''><LazyLoadImage effect='blur' src={c8 } alt="" className="min-h-[100px]" /></li></Link>
                <Link to='/products'><li className=''><LazyLoadImage effect='blur' src={c9 } alt="" className="min-h-[100px]" /></li></Link>
                <Link to='/products'><li className=''><LazyLoadImage effect='blur' src={c10} alt="" className="min-h-[100px]" /></li></Link>
                <Link to='/products'><li className=''><LazyLoadImage effect='blur' src={c11} alt="" className="min-h-[100px]" /></li></Link>
                <Link to='/products'><li className=''><LazyLoadImage effect='blur' src={c12} alt="" className="min-h-[100px]" /></li></Link>
                <Link to='/products'><li className=''><LazyLoadImage effect='blur' src={c13} alt="" className="min-h-[100px]" /></li></Link>
                <Link to='/products'><li className=''><LazyLoadImage effect='blur' src={c14} alt="" className="min-h-[100px]" /></li></Link>
                <Link to='/products'><li className=''><LazyLoadImage effect='blur' src={c15} alt="" className="min-h-[100px]" /></li></Link>
                <Link to='/products'><li className=''><LazyLoadImage effect='blur' src={c16} alt="" className="min-h-[100px]" /></li></Link>
                <Link to='/products'><li className=''><LazyLoadImage effect='blur' src={c17} alt="" className="min-h-[100px]" /></li></Link>
                <Link to='/products'><li className=''><LazyLoadImage effect='blur' src={c18} alt="" className="min-h-[100px]" /></li></Link>
                <Link to='/products'><li className=''><LazyLoadImage effect='blur' src={c19} alt="" className="min-h-[100px]" /></li></Link>
                <Link to='/products'><li className=''><LazyLoadImage effect='blur' src={c20} alt="" className="min-h-[100px]" /></li></Link>
                <Link to='/products'><li className=''><LazyLoadImage effect='blur' src={c21} alt="" className="min-h-[100px]" /></li></Link>
                <Link to='/products'><li className=''><LazyLoadImage effect='blur' src={c22} alt="" className="min-h-[100px]" /></li></Link>
                <Link to='/products'><li className=''><LazyLoadImage effect='blur' src={c23} alt="" className="min-h-[100px]" /></li></Link>
                <Link to='/products'><li className=''><LazyLoadImage effect='blur' src={c24} alt="" className="min-h-[100px]" /></li></Link>
               
              </ul>
            </div>

            <div>
              <h1 className='text-xl px-8 font-bold font1 text-center text-slate-800 mb-6 mt-6'>DEALS ON LATEST ARRIVALS</h1>
              <ul className='grid grid-cols-1 '>
                <Link to='/products'><li className=''><LazyLoadImage effect='blur' src={j1 } alt="" className="min-h-[100px]" /></li></Link>
                <Link to='/products'><li className=''><LazyLoadImage effect='blur' src={j2 } alt="" className="min-h-[100px]" /></li></Link>
                <Link to='/products'><li className=''><LazyLoadImage effect='blur' src={j3 } alt="" className="min-h-[100px]" /></li></Link>
                <Link to='/products'><li className=''><LazyLoadImage effect='blur' src={j4 } alt="" className="min-h-[100px]" /></li></Link>
                
               
              </ul>
            </div>

            <div className='mt-4 w-[100vw]'>
              <Carousel showThumbs={false} showStatus={false} showArrows={false} showIndicators={true} renderIndicator={(onClickHandler, isSelected, index, label) => indicator(onClickHandler, isSelected, index, label)}>
                <Link to='/products'>
                  <div>
                    <LazyLoadImage effect='blur' src={mc1} width='100%' alt='Banner_Image' className='min-h-[200px]'/>
                    <div className='h-[30px]'>
                    </div>
                  </div>
                </Link>
                <Link to='/products'>
                  <div>
                    <LazyLoadImage effect='blur' src={mc2} width='100%' alt='Banner_Image' className='min-h-[200px]'/>
                    <div className='h-[30px]'>

                    </div>
                  </div>
                </Link>
                <Link to='/products'>
                  <div>
                    <LazyLoadImage effect='blur' src={mc3} width='100%' alt='Banner_Image' className='min-h-[200px]'/><br />
                    <div className='h-[30px]'>

                    </div>
                  </div>
                </Link>
                <Link to='/products'>
                  <div>
                    <LazyLoadImage effect='blur' src={mc4} width='100%' alt='Banner_Image' className='min-h-[200px]'/><br />
                    <div className='h-[30px]'>

                    </div>
                  </div>
                </Link>
                <Link to='/products'>
                  <div>
                    <LazyLoadImage effect='blur' src={mc5} width='100%' alt='Banner_Image' className='min-h-[200px]'/><br />
                    <div className='h-[30px]'>

                    </div>
                  </div>
                </Link>
                <Link to='/products'>
                  <div>
                    <LazyLoadImage effect='blur' src={mc6} width='100%' alt='Banner_Image' className='min-h-[200px]'/><br />
                    <div className='h-[30px]'>

                    </div>
                  </div>
                </Link>
                <Link to='/products'>
                  <div>
                    <LazyLoadImage effect='blur' src={mc7} width='100%' alt='Banner_Image' className='min-h-[200px]'/><br />
                    <div className='h-[30px]'>

                    </div>
                  </div>
                </Link>
                <Link to='/products'>
                  <div>
                    <LazyLoadImage effect='blur' src={mc8} width='100%' alt='Banner_Image' className='min-h-[200px]'/><br />
                    <div className='h-[30px]'>

                    </div>
                  </div>
                </Link>
              </Carousel>
            </div>

            <Footer/>
          </Fragment>
      }

    </Fragment>
  )
}

const Modal = ({ showModal, setShowModal , selectedProduct}) => {
  if (!showModal) return null;

  return (
    <div className='fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-white p-8 rounded-lg'>
        <h2 className='text-center text-2xl font-bold mb-4'>Share via</h2>
        <div className='flex justify-center space-x-4'>
          <div className='flex flex-row gap-2 '> 

          <div className='flex flex-col'> 
            <button className='w-24 h-12 bg-pink-500 rounded-full flex items-center justify-center' 
              onClick={() => {
                window.open('http://localhost:3000/chats/6694a30302cffd593a657a0f/'+selectedProduct.id, '_blank');
              }}
            >
          🤍
          </button>
              
          <span className='ml-2'>My Besties</span>
          </div>
          
     <div className='flex flex-col'>
     <button className='w-24 h-12 bg-pink-200 rounded-full flex items-center justify-center' 
              onClick={() => {
                window.open('http://localhost:3000', '_blank');
              }}
            >
            👩 
          </button>

          <span className='ml-2'>Ask Besties</span>
     </div>
          </div>

         <button className='w-12 h-12 bg-green-500 rounded-full flex items-center justify-center'>
            {/* Replace with actual icons */}
            🟢
          </button>
          <button className='w-12 h-12 bg-green-500 rounded-full flex items-center justify-center'>
            {/* Replace with actual icons */}
            🟢
          </button>
        </div>
        <button
          onClick={() => setShowModal(false)}
          className='mt-4 p-2 bg-gray-500 text-white rounded'
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Home