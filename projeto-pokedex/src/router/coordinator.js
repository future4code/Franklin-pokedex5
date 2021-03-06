export const goToHome = (navigate) => {
  navigate("/");
};

export const goToDetails = (navigate, name) => {
  navigate(`/details/${name}`);
  console.log(name);
};

export const goToPokedex = (navigate) => {
  navigate("/pokedex");
};

export const goBack = (navigate) => {
  navigate(-1);
};
