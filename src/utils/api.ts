type TokenPostProps = {
    username: string,
    password: string
}


// Solicita o token do usuario após autenticação
export function TOKEN_POST(body: TokenPostProps) {
    return {
      url: process.env.REACT_APP_ENDPOINT + "jwt-auth/v1/token",
      options: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      },
    };
}


export function TOKEN_VALIDATE_POST(token: string) {
  return {
    url: process.env.REACT_APP_ENDPOINT + "jwt-auth/v1/token/validate",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      }
  }}
}



export function GET_USER(token: string) {
    return {
        url: process.env.REACT_APP_ENDPOINT + "api/user",
        options: {
            method: "GET",
            headers: {
                Authorization: "Bearer " + token,
            },
        },
    };
}