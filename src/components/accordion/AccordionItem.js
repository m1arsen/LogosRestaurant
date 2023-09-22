import { useRef } from "react"
import { AccordionItemLine, AccordionHeader, AccordionBody, AccordionCollapse, AccordionArrow } from './accordion-style';

import accordionArrowIcon from '../../resources/delivery-terms/accordion-icon.svg';

const AccordionItem = ({faqItem, onClick, isOpen}) => {
  const itemRef = useRef(null);

  const arrowActive = {'transform': 'translateY(-50%) rotateX(180deg)'};
  const itemActive = {'background': 'linear-gradient(114.93deg, #597e5f 5.11%, #66926b 94%)', 'border-radius': '10px 10px 0 0'};

  return (
    <AccordionItemLine>
      <AccordionHeader onClick={() => onClick()} style={isOpen ? itemActive : {}}>
        {faqItem[0]}
        <AccordionArrow src={accordionArrowIcon} alt="arrow" style={isOpen ? arrowActive : {}} />
      </AccordionHeader>
      <AccordionCollapse style={isOpen ? { height : itemRef.current.scrollHeight } : { height : '0px'}} >
        <AccordionBody ref={itemRef}>{faqItem[1]}</AccordionBody>
      </AccordionCollapse>
    </AccordionItemLine>
  )
}

export default AccordionItem;