import "./InvitationCardPage.css";
import "../../Utilities/InCard/InCard";
import InCard from "../../Utilities/InCard/InCard";
import { useAuth } from "../../Context/AuthProvider";
// interface card {
//   id: string;
//   imgURl: string;
//   designName: string;
//   price: number;
//   discount: number;
// }
const InvitationCardPage = () => {
  const auth = useAuth();

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
        {auth?.cards.map((card) => (
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
