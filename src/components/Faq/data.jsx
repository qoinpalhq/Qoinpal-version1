import arrowRedirect from "/src/assets/arrow-right.png";
import faq from "./faq.module.css";

const data = [
  {
    id: 1,
    question: "what is qoinpal ?",
    answer: "#1 African borderless fiat-to-crypto exchange platform",
  },
  {
    id: 2,
    question: "what is borderless fiat-to-crypto ?",
    answer:
      "It is a system of exchange where a wallet is not necessary before carrying out a cryptocurrency transaction.",
  },
  {
    id: 3,
    question: "NO WALLET ? how do i now transact in crypto ?",
    answer:
      "We act as a transfer gateway, accepting fiat and sending crypto to your client.",
  },
  {
    id: 4,
    question: "invoicing system ?",
    answer:
      "With the help of qoinpal's borderless invoicing system, you may bill customers in any currency and receive crypto",
  },
  {
    id: 5,
    question: "other question ?",
    answer: (
      <p
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: "2rem",
          gap: "0.5rem",
        }}
      >
        <strong> contact</strong>
        <a href="mailto:support@qoinpal.com?subject=Your%20subject%20here">
          {" "}
          <span> support@qoinpal.com </span>
          <img src={arrowRedirect} alt="" />
        </a>
      </p>
    ),
  },
];

export default data;
