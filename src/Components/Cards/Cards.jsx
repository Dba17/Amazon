import classes from "./cards.module.css";

// card data — each card is a product category with a title, image, and link
const cards = [
  {
    id: 1,
    title: "Pick up where you left off",
    image:
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=600&q=80",
    link: "See more",
  },
  {
    id: 2,
    title: "Deals on Electronics",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    link: "See all deals",
  },
  {
    id: 3,
    title: "Refresh your space",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80",
    link: "See more",
  },
  {
    id: 4,
    title: "Get your game on",
    image:
      "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&w=600&q=80",
    link: "Shop gaming",
  },
  {
    id: 5,
    title: "Top categories in Kitchen",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80",
    link: "Shop kitchen",
  },
  {
    id: 6,
    title: "New home arrivals",
    image:
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=600&q=80",
    link: "See more",
  },
  {
    id: 7,
    title: "Beauty steals under $25",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80",
    link: "See more",
  },
  {
    id: 8,
    title: "Toys for all ages",
    image:
      "https://images.unsplash.com/photo-1558060370-d644479cb6f7?auto=format&fit=crop&w=600&q=80",
    link: "Shop toys",
  },
];

function Cards() {
  return (
    <section className={classes.cards_section}>
      <div className={classes.cards_grid}>
        {cards.map((card) => (
          <div key={card.id} className={classes.card}>
            <h3>{card.title}</h3>
            <div className={classes.card_image}>
              <img src={card.image} alt={card.title} />
            </div>
            <a href="#" className={classes.card_link}>
              {card.link}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cards;
