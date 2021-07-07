export const NAME_APP = "HTs Store - Los mejores precios del mercado";

export async function getData (categorias){
    // Traigo la data de MLA por categorias
    const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${categorias}`);
    const data = await response.json();
    return data.results;
  }
