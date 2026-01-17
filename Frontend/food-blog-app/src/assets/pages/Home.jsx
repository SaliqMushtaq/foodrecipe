export default function Home() {
  const addRecipe = () => {
    alert("Share your recipe clicked");
  };

  return (
    <section className="home">
      <div className="left">
        <h1>Food Recipe</h1>
        <h5>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </h5>
        <button onClick={addRecipe}>Share your recipe</button>
      </div>

      <div className="right">
        <img
          src="/foodRecipe.png"
          width="320"
          height="300"
          alt="Food Recipe"
        />
      </div>
    </section>
  );
}
