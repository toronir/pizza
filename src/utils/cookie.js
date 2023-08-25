export const setCookie = ({ name, value, expiresDays, path = '/' }) => {
  const date = new Date();
  const expiresDate = new Date(date.setDate(date.getDate() + expiresDays)).toGMTString();
  document.cookie = `${name}=${value}; expires=${expiresDate}; path=${path};`;
};

export const getCookie = ({ name }) => {
  const { cookie } = document;
  const match = cookie.match(new RegExp(`(^| )${name}=([^;]+)`));

  if (match) return match[2];
  return null;
};
