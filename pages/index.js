import ExhibitList from "../components/exhibits/ExhibitList";

const DUMMY_EXHIBITS = [
  {
    id: "e1",
    title: "Zoo Babies",
    image:
      "https://www.indianapoliszoo.com/wp-content/uploads/2019/06/Teagan-and-boy-WEB.jpeg",
    description:
      "Cubs, pups, calves, chicks - no matter what they're called, baby animals are adorable!",
  },
  {
    id: "e2",
    title: "Plains",
    image:
      "https://www.indianapoliszoo.com/wp-content/uploads/2018/04/CROPPED_Elephant_Tombi-Fred_Cateresizedresized-2.jpg",
    description:
      "Enjoy up-close experiences with the most iconic species of Africa's arid savannahs.",
  },
  {
    id: "e3",
    title: "Forests",
    image:
      "https://www.indianapoliszoo.com/wp-content/uploads/2018/04/CROPPED_Blue-throated_Macaw__c__Steve_Milpacher_courtesy_of_World_Parrot_Trustresizedresized.jpg",
    description:
      "Venture deep under the thick canopy and spot the iconic creatures that call the forest home.",
  },
];

export default function HomePage(props) {

  return <ExhibitList exhibits={DUMMY_EXHIBITS} />;
}
