const url_main = process.env.REACT_APP_API_URL || "http://192.168.1.4:5000";

const headers_main = {
  "Content-Type": "application/json",
};

export default class apiRoutes {
  static GET = async (path) => {
    return await fetch(url_main + path, {
      method: "GET",
      headers: headers_main,
    }).catch((error) => {
      console.log(error);
    });
  };
  static POST = async (path, data) => {
    console.log(url_main + path);
    return await fetch(url_main + path, {
      method: "POST",
      headers: headers_main,
      body: JSON.stringify(data),
    }).catch((error) => {
      console.log(error);
    });
  };
  static PUT = async (path, data) => {
    return await fetch(url_main + path, {
      method: "PUT",
      headers: headers_main,
      body: JSON.stringify(data),
    }).catch((error) => {
      console.log(error);
    });
  };
  static DELETE = async (path) => {
    return await fetch(url_main + path, {
      method: "DELETE",
      mode: "cors",
      headers: headers_main,
    }).catch((error) => {
      console.log(error);
    });
  };
}
