import "./InvitationCardPage.css";
import "../../Utilities/InCard/InCard";
import InCard from "../../Utilities/InCard/InCard";
// interface card {
//   id: string;
//   imgURl: string;
//   designName: string;
//   price: number;
//   discount: number;
// }
const InvitationCardPage = () => {
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
    <div className="invitaionCardPage bg-white ">
      <div className="invitaionShowcase flex justify-center items-center">
        <div className="right flex flex-col gap-3 text-center">
          <div className="text-4xl font-medium">
            Create your Wedding <br />
            Invitation Card
          </div>
          <p>
            Make your special day even more memorable by inviting others in a
            truly unique way.
          </p>
          <div className="bg-purple-700 text-white py-3 px-2 rounded-lg font-bold uppercase text-xl w-56 text-center m-auto">
            Create Now
          </div>
        </div>
      </div>
      <div className="cardsDisplay flex flex-wrap justify-around items-center bg-white gap-8 w-[80%] m-auto p-8">
        {cards.map((card) => (
          <InCard
            id={card.id}
            imgURl={card.imgURl}
            designName={card.designName}
            price={card.price}
            discount={card.discount}
          />
        ))}
      </div>
    </div>
  );
};

export default InvitationCardPage;
