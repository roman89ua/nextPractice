const getRandom = (count: number) => Math.floor(Math.random() * count);
const AboutPage = () => {
  if (getRandom(2) === 1) {
    throw new Error("Random error in About page");
  }
  return <h1>AboutPage</h1>;
};

export default AboutPage;
