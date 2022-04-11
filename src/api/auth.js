import { appGlobal } from './appGlobal';

export async function validacionCuenta(obj) {
  try {
    const url = appGlobal.apiCredito + "/autentication";
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    return null;
  }
}