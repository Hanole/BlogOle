const SHOP_DATA = [
  {
    title: "arts",
    items: [
      {
        "id": 1,
        "name": "Abstract Composition",
        "imageUrl": "https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "price": 120.0
      },
      {
        "id": 2,
        "name": "Modern Oil Painting",
        "imageUrl": "https://images.pexels.com/photos/1570779/pexels-photo-1570779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "price": 250.0
      },
      {
        "id": 3,
        "name": "Colorful Graffiti Art",
        "imageUrl": "https://images.pexels.com/photos/3095769/pexels-photo-3095769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "price": 90.0
      },
      {
        "id": 4,
        "name": "Surreal Landscape",
        "imageUrl": "https://images.pexels.com/photos/342002/pexels-photo-342002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "price": 185.5
      },
      {
        "id": 5,
        "name": "Minimalist",
        "imageUrl": "https://images.pexels.com/photos/3750893/pexels-photo-3750893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "price": 60.0
      },
      {
        "id": 6,
        "name": "Expressionist Portrait",
        "imageUrl": "https://images.pexels.com/photos/3326738/pexels-photo-3326738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "price": 200.0
      },
      {
        "id": 7,
        "name": "Black and White Sketch",
        "imageUrl": "https://images.pexels.com/photos/7784599/pexels-photo-7784599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "price": 45.0
      },
      {
        "id": 8,
        "name": "Mixed Media Collage",
        "imageUrl": "https://images.pexels.com/photos/4066761/pexels-photo-4066761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "price": 130.0
      },
      {
        "id": 9,
        "name": "Digital Illustration",
        "imageUrl": "https://images.pexels.com/photos/11798029/pexels-photo-11798029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "price": 75.0
      },
      {
        "id": 10,
        "name": "Canvas Splash Painting",
        "imageUrl": "https://images.pexels.com/photos/7896729/pexels-photo-7896729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "price": 140.0
      },
    ],
  },
  {
    title: "instruments",
    items: [
      {
        "id": 10,
        "name": "Yamaha P-45 Digital Piano",
        "imageUrl": "https://m.media-amazon.com/images/I/71clt9k2HPL._AC_SL1500_.jpg",
        "price": 499.99
      },
      {
        "id": 11,
        "name": "Fender Player Stratocaster Electric Guitar",
        "imageUrl": "https://m.media-amazon.com/images/I/71MJk2f+z1L._AC_SL1500_.jpg",
        "price": 849.99
      },
      {
        "id": 12,
        "name": "Roland TD-1DMK V-Drums Electronic Drum Kit",
        "imageUrl": "https://m.media-amazon.com/images/I/81oZUSfE0DL._AC_SL1500_.jpg",
        "price": 699.99
      },
      {
        "id": 13,
        "name": "Martin LX1 Little Martin Acoustic Guitar",
        "imageUrl": "https://m.media-amazon.com/images/I/61czdlz7goL._AC_SL1500_.jpg",
        "price": 499.00
      },
      {
        "id": 14,
        "name": "Yamaha YFL-222 Student Flute",
        "imageUrl": "https://m.media-amazon.com/images/I/71ZTqblH2nL._AC_SL1500_.jpg",
        "price": 399.99
      },
      {
        "id": 15,
        "name": "Stentor Student I Violin Outfit 4/4",
        "imageUrl": "https://m.media-amazon.com/images/I/71HYOxHT7iL._AC_SL1500_.jpg",
        "price": 189.99
      },
      {
        "id": 16,
        "name": "Alesis Recital Pro Digital Piano",
        "imageUrl": "https://m.media-amazon.com/images/I/71Vt5CrbREL._AC_SL1500_.jpg",
        "price": 379.00
      },
      {
        "id": 17,
        "name": "Kala KA-15S Soprano Ukulele",
        "imageUrl": "https://m.media-amazon.com/images/I/71eFpxZlGfL._AC_SL1500_.jpg",
        "price": 59.00
      },
      {
        "id": 18,
        "name": "Yamaha YTR-2330 Standard Bb Trumpet",
        "imageUrl": "https://m.media-amazon.com/images/I/61TjPbznGUL._AC_SL1500_.jpg",
        "price": 629.99
      },
      {
        "id": 19,
        "name": "Donner DED-200 Electronic Drum Set",
        "imageUrl": "https://m.media-amazon.com/images/I/71RVG44zJGL._AC_SL1500_.jpg",
        "price": 549.99
      }
    ],
  },
  {
    title: "randomshit",
    items: [
      {
        "id": 20,
        "name": "Wireless Noise Cancelling Headphones",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/61J2XJZ6YvL._AC_SL1500_.jpg",
        "price": 199.99
      },
      {
        "id": 21,
        "name": "Kindle Paperwhite 11th Gen",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/61jLkX6ZodL._AC_SL1000_.jpg",
        "price": 139.99
      },
      {
        "id": 22,
        "name": "Nike Air Max 270",
        "imageUrl": "https://images.nike.com/is/image/DotCom/CW6984_100_A_PREM?wid=700&hei=700&fmt=png-alpha",
        "price": 159.99
      },
      {
        "id": 23,
        "name": "Fjällräven Kånken Backpack",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/81cF3H6mhoL._AC_UL1500_.jpg",
        "price": 89.95
      },
      {
        "id": 24,
        "name": "Logitech MX Master 3 Mouse",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/61G9YBYXnbL._AC_SL1500_.jpg",
        "price": 99.99
      },
      {
        "id": 25,
        "name": "LEGO Star Wars Millennium Falcon",
        "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/81r1AfFIFDL._AC_SL1500_.jpg",
        "price": 159.99
      },
      {
        "id": 26,
        "name": "Apple Magic Keyboard",
        "imageUrl": "https://m.media-amazon.com/images/I/71L2iBSyyOL._AC_SL1500_.jpg",
        "price": 99.00
      },
      {
        "id": 27,
        "name": "Sony Alpha a6000 Mirrorless Camera",
        "imageUrl": "https://m.media-amazon.com/images/I/81Fm7D4-KgL._AC_SL1500_.jpg",
        "price": 648.00
      },
      {
        "id": 28,
        "name": "Theragun Mini Handheld Massage Gun",
        "imageUrl": "https://m.media-amazon.com/images/I/71JKzqWdo0L._AC_SL1500_.jpg",
        "price": 199.00
      },
      {
        "id": 29,
        "name": "Bose SoundLink Revolve Bluetooth Speaker",
        "imageUrl": "https://m.media-amazon.com/images/I/81+DYcK4D9L._AC_SL1500_.jpg",
        "price": 219.00
      }
    ],
  },
  {
    title: "coolstuff",
    items: [
      {
        "id": 30,
        "name": "Mini Desktop Vacuum Cleaner",
        "imageUrl": "https://m.media-amazon.com/images/I/61+F-FwFekL._AC_SL1500_.jpg",
        "price": 12.99
      },
      {
        "id": 31,
        "name": "Moon Lamp – 3D Printed LED Light",
        "imageUrl": "https://m.media-amazon.com/images/I/71tN1F0ZErL._AC_SL1500_.jpg",
        "price": 24.99
      },
      {
        "id": 32,
        "name": "Mini Wacky Waving Inflatable Tube Guy",
        "imageUrl": "https://m.media-amazon.com/images/I/81lb0v5qZsL._AC_SL1500_.jpg",
        "price": 9.95
      },
      {
        "id": 33,
        "name": "Shower Wine Glass Holder",
        "imageUrl": "https://m.media-amazon.com/images/I/61D07B5ZPKL._AC_SL1500_.jpg",
        "price": 13.95
      },
      {
        "id": 34,
        "name": "Rick and Morty Portal Gun Replica",
        "imageUrl": "https://m.media-amazon.com/images/I/71N3eX+qeFL._AC_SL1500_.jpg",
        "price": 24.99
      },
      {
        "id": 35,
        "name": "USB LED Clock Fan",
        "imageUrl": "https://m.media-amazon.com/images/I/51R3hh9vbQL._AC_SL1001_.jpg",
        "price": 16.99
      },
      {
        "id": 36,
        "name": "Burrito Blanket",
        "imageUrl": "https://m.media-amazon.com/images/I/81VLCEc3gEL._AC_SL1500_.jpg",
        "price": 23.99
      },
      {
        "id": 37,
        "name": "Avocado Pool Float",
        "imageUrl": "https://m.media-amazon.com/images/I/81SkROxZz3L._AC_SL1500_.jpg",
        "price": 32.95
      },
      {
        "id": 38,
        "name": "Desktop Jellyfish Lamp",
        "imageUrl": "https://m.media-amazon.com/images/I/71Obqsf5rXL._AC_SL1500_.jpg",
        "price": 39.99
      },
      {
        "id": 39,
        "name": "The Official Bob Ross Chia Pet",
        "imageUrl": "https://m.media-amazon.com/images/I/81b-Q5UMebL._AC_SL1500_.jpg",
        "price": 19.99
      }
    ],
  },
]

export default SHOP_DATA;