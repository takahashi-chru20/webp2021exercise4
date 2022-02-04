export async function fetchImages() {
    const response = await fetch(
      `https://thatcopy.github.io/catAPI/imgs/webp/568c863.webp`
    );
    const data = await response.json();
    return data.message;
  }