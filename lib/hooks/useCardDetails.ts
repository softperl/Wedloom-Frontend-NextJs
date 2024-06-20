import { useState, useEffect } from "react";

const useCardDetails = (
  searchParams: URLSearchParams,
  params: any,
  data: any
) => {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [cardName, setCardName] = useState<string>("");

  const cardId = searchParams.get("cardId");
  const pageNumber = searchParams.get("pageNumber");

  useEffect(() => {
    const cardNumber = cardId
      ? parseInt(cardId)
      : params?.cards
      ? parseInt(params.cards[1])
      : null;
    const hasPageNumber = pageNumber ? parseInt(pageNumber) : 1;

    setActiveIndex(hasPageNumber);
    if (cardNumber !== null) {
      setActiveCard(cardNumber);

      const card = data?.find((item: any) => item.id === cardNumber.toString());
      if (card) {
        setCardName(card.name);
      }
    }
  }, [cardId, pageNumber, params, data]);

  return { cardId, pageNumber, activeIndex, activeCard, cardName };
};

export default useCardDetails;
