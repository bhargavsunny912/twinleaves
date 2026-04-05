const products = [
  {
    id: 1,
    name: "Onion",
    category: "Vegetables",
    price: 30,
    description:
      "Fresh onions sourced directly from local farms. Known for their pungent flavour and versatility, onions are a staple in Indian cooking. They add depth to curries, chutneys, and salads. Best stored in a cool, dry place away from sunlight.",
    image:"onion.avif",
  },
  {
    id: 2,
    name: "Potato",
    category: "Vegetables",
    price: 25,
    description:
      "Versatile and nutritious, these potatoes are freshly harvested and perfect for boiling, frying, or baking. Rich in carbohydrates and potassium, they are a household favourite across India. Ideal for aloo sabzi, samosas, and more.",
    image:"potato.avif",
  },
  {
    id: 3,
    name: "Carrot",
    category: "Vegetables",
    price: 40,
    description:
      "Crunchy and naturally sweet, these carrots are packed with beta-carotene and vitamins. Great for juicing, salads, or cooking in halwa and curries. Freshly sourced from farms, these carrots retain their natural nutrition and vibrant colour.",
    image:"carrot.avif",
  },
  {
    id: 4,
    name: "Tomato",
    category: "Vegetables",
    price: 35,
    description:
      "Juicy and ripe tomatoes ideal for gravies, salads, and sauces. Rich in lycopene and antioxidants, they support heart health. These tomatoes are handpicked at peak ripeness to ensure maximum flavour and freshness in every bite.",
    image:
     "tomato.avif",
  },
  {
    id: 5,
    name: "Apple",
    category: "Fruits",
    price: 120,
    description:
      "Crisp and refreshing apples with a perfect balance of sweet and tart flavour. Rich in dietary fibre and vitamin C, they support digestion and immunity. These apples are sourced from the orchards of Himachal Pradesh and Kashmir.",
    image:
      "apple.avif",
  },
  {
    id: 6,
    name: "Banana",
    category: "Fruits",
    price: 50,
    description:
      "Naturally ripened bananas that are soft, sweet, and full of energy. An excellent source of potassium, fibre, and vitamin B6. Perfect as a quick snack, in smoothies, or as a topping on desserts. Great for kids and adults alike.",
    image:
      "banana.avif",
  },
  {
    id: 7,
    name: "Orange",
    category: "Fruits",
    price: 80,
    description:
      "Tangy and juicy oranges loaded with vitamin C and antioxidants. These are hand-selected for their freshness and sweetness. Perfect for juicing, snacking, or adding zest to your salads and desserts. A must-have for a healthy diet.",
    image:
      "orange.avif",
  },
  {
    id: 8,
    name: "Mango",
    category: "Fruits",
    price: 150,
    description:
      "The king of fruits! These premium Alphonso mangoes are known for their rich aroma, velvety texture, and natural sweetness. Sourced from Ratnagiri, they are perfect for eating fresh, making aamras, or blending into refreshing mango lassi.",
    image:
      "mango.avif",
  },
  {
    id: 9,
    name: "Cabbage",
    category: "Vegetables",
    price: 45,
    description:
      "Fresh and tightly packed cabbage heads, ideal for stir-fries, salads, and soups. Rich in vitamin K, vitamin C, and dietary fibre. These cabbages are harvested at the right time to ensure crispness and a mild, slightly sweet flavour.",
    image:
      "cabbage.avif",
  },
  {
    id: 10,
    name: "Grapes",
    category: "Fruits",
    price: 90,
    description:
      "Plump and seedless grapes bursting with natural sweetness. Rich in resveratrol and antioxidants that promote heart health. These grapes are great as a snack, in fruit salads, or paired with cheese. Sourced fresh from Nashik vineyards.",
    image:
      "grapes.avif",
  },
  {
    id: 11,
    name: "Pineapple",
    category: "Fruits",
    price: 110,
    description:
      "Tropical and tangy pineapples freshly sourced for your table. High in bromelain, an enzyme that aids digestion and reduces inflammation. Perfect for eating fresh, making juices, or adding to pizzas and desserts for a burst of tropical flavour.",
    image:
      "pineapple.avif",
  },
  {
    id: 12,
    name: "Spinach",
    category: "Vegetables",
    price: 20,
    description:
      "Tender and nutrient-dense spinach leaves, freshly harvested and washed. An excellent source of iron, calcium, and vitamins A and C. Ideal for palak paneer, green smoothies, salads, and soups. A superfood for everyday healthy eating.",
    image:
      "spinach.avif",
  },
];

export default products;