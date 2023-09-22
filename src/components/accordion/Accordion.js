// Стилизация
import { useState } from 'react';
import AccordionItem from './AccordionItem';
import { AccordionContainer } from './accordion-style';

const Accordion = ({faqList}) => {
  const [openId, setOpenId] = useState(null);

  return (
    <AccordionContainer>
      {faqList.map((faqItem, id) => {
        return <AccordionItem onClick={() => id === openId ? setOpenId(null) : setOpenId(id) } faqItem={faqItem} isOpen={id === openId} key={id}/>
      })}
    </AccordionContainer>
  )
}

export default Accordion;