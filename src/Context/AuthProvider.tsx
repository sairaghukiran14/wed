import { useContext, createContext, Children } from "react";
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const cards = [
    {
      id: "C101",
      imgURl:
        "https://res.cloudinary.com/dmqz317kh/image/upload/v1717756952/4_lhwtjw.png",
      designName: "Lavender Card",
      price: 124,
      discount: 20,
    },
    {
      id: "C102",
      imgURl:
        "https://res.cloudinary.com/dmqz317kh/image/upload/v1717756952/1_ciapmq.png",
      designName: "Rose Card",
      price: 124,
      discount: 20,
    },
    {
      id: "C103",
      imgURl:
        "https://res.cloudinary.com/dmqz317kh/image/upload/v1717756952/3_ogkkyg.png",
      designName: "StarDust Card",
      price: 124,
      discount: 20,
    },
    {
      id: "C104",
      imgURl:
        "https://res.cloudinary.com/dmqz317kh/image/upload/v1717756951/2_ktnx86.png",
      designName: "Orange Elegant Card",
      price: 124,
      discount: 20,
    },
    {
      id: "C105",
      imgURl:
        "https://res.cloudinary.com/dmqz317kh/image/upload/v1717756952/4_lhwtjw.png",
      designName: "Lavender Card",
      price: 124,
      discount: 20,
    },
    {
      id: "C106",
      imgURl:
        "https://res.cloudinary.com/dmqz317kh/image/upload/v1717756952/1_ciapmq.png",
      designName: "Rose Card",
      price: 124,
      discount: 20,
    },
    {
      id: "C107",
      imgURl:
        "https://res.cloudinary.com/dmqz317kh/image/upload/v1717756952/3_ogkkyg.png",
      designName: "StarDust Card",
      price: 124,
      discount: 20,
    },
    {
      id: "C108",
      imgURl:
        "https://res.cloudinary.com/dmqz317kh/image/upload/v1717756951/2_ktnx86.png",
      designName: "Orange Elegant Card",
      price: 124,
      discount: 20,
    },
    {
      id: "C109",
      imgURl:
        "https://res.cloudinary.com/dmqz317kh/image/upload/v1717756952/4_lhwtjw.png",
      designName: "Lavender Card",
      price: 124,
      discount: 20,
    },
    {
      id: "C110",
      imgURl:
        "https://res.cloudinary.com/dmqz317kh/image/upload/v1717756952/1_ciapmq.png",
      designName: "Rose Card",
      price: 124,
      discount: 20,
    },
    {
      id: "C111",
      imgURl:
        "https://res.cloudinary.com/dmqz317kh/image/upload/v1717756952/3_ogkkyg.png",
      designName: "StarDust Card",
      price: 124,
      discount: 20,
    },
    {
      id: "C112",
      imgURl:
        "https://res.cloudinary.com/dmqz317kh/image/upload/v1717756951/2_ktnx86.png",
      designName: "Orange Elegant Card",
      price: 124,
      discount: 20,
    },
  ];
  return (
    <AuthContext.Provider value={{ cards }}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
export const useAuth = () => {
  return useContext(AuthContext);
};
