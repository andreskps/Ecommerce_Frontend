
export interface Departamento {
    id: number;
    name: string;
    municipios:{
        id: number;
        name: string;
        priceShipping: number;
    }[]
}

export const getDepartamentos = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/departamentos`,
    {
      method: "GET",
      cache: "no-cache",
    }
  );

  const departamentos:Departamento[] = await response.json();

  return departamentos
};
